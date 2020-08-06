using System.IO;
using System.Text;
using System.Threading.Tasks;
using Google.Protobuf;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace FactSet.Stach.Generator.Extensions {
    internal static class MessageExtensions {
        public static async Task WriteJson(this IMessage message, string filePath, bool formatted) {
            using (var fs = File.Open(filePath, FileMode.Create, FileAccess.Write, FileShare.Write)) {
                await WriteJson(message, fs, formatted);
            }
        }

        public static async Task WriteJson(this IMessage message, Stream stream, bool formatted) {
            var formatter = new JsonFormatter(JsonFormatter.Settings.Default);

            if (formatted) {
                var sb = new StringBuilder();
                using (var sw = new StringWriter(sb)) {
                    formatter.WriteValue(sw, message);
                }

                var json = sb.ToString().Replace("\r\n", "\n");

                var jsonStreamWriter = new StreamWriter(stream) {
                    NewLine = "\n"
                };
                // Makes the json human readable
                var jobj = JObject.Parse(json);
                var jtw = new JsonTextWriter(jsonStreamWriter) {
                    Formatting = Formatting.Indented
                };
                await jobj.WriteToAsync(jtw);
                jtw.Flush();
            } else {
                var sw = new StreamWriter(stream);
                formatter.WriteValue(sw, message);
            }
        }

        public static void WriteBinary(this IMessage message, string filePath) {
            using (var fs = File.Open(filePath, FileMode.Create, FileAccess.Write, FileShare.Write)) {
                message.WriteTo(fs);
            }
        }
    }
}
