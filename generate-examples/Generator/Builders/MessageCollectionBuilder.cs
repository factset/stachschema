using System;
using System.Collections.Generic;
using Google.Protobuf;

namespace FactSet.Stach.Generator.Builders {
    internal abstract class MessageCollectionBuilder : IMessageCollectionBuilder {
        private readonly IDictionary<string, IMessage> m_messages = new Dictionary<string, IMessage>();

        public IDictionary<string, IMessage> Build() {
            this.DoBuild();
            return this.m_messages;
        }

        protected abstract void DoBuild();

        protected void Add(Func<IMessage> func) {
            this.m_messages.Add(func.Method.Name, func());
        }
    }
}