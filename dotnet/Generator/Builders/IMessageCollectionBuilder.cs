using System.Collections.Generic;
using Google.Protobuf;

namespace FactSet.Stach.Generator.Builders
{
    internal interface IMessageCollectionBuilder {
        IDictionary<string, IMessage> Build();
    }
}