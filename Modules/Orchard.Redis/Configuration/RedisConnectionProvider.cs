﻿using System;
using System.Collections.Concurrent;
using System.Configuration;
using Orchard.Environment.Configuration;
using Orchard.Logging;
using StackExchange.Redis;

namespace Orchard.Redis.Configuration {

    public class RedisConnectionProvider : IRedisConnectionProvider {
        private static ConcurrentDictionary<string, ConnectionMultiplexer> _connectionMultiplexers = new ConcurrentDictionary<string, ConnectionMultiplexer>();
        private readonly ShellSettings _shellSettings;

        public RedisConnectionProvider(ShellSettings shellSettings) {
            _shellSettings = shellSettings;
            Logger = NullLogger.Instance;
        }

        public ILogger Logger { get; set; }

        public string GetConnectionString(string service) {
            var _tenantSettingsKey = _shellSettings.Name + ":" + service;
            var _defaultSettingsKey = service;

            var connectionStringSettings = ConfigurationManager.ConnectionStrings[_tenantSettingsKey] ?? ConfigurationManager.ConnectionStrings[_defaultSettingsKey];

            if (connectionStringSettings == null) {
                throw new ConfigurationErrorsException("A connection string is expected for " + service);
            }

            return connectionStringSettings.ConnectionString;
        }

        public ConnectionMultiplexer GetConnection(string connectionString) {

            if (String.IsNullOrWhiteSpace(connectionString)) {
                throw new ArgumentNullException("connectionString");
            }

            var connectionMultiplexer = _connectionMultiplexers.GetOrAdd(connectionString, cfg => {
                Logger.Debug("Creating a new cache client for: {0}", connectionString);
                return ConnectionMultiplexer.Connect(connectionString);
            });

            return connectionMultiplexer;
        }
    }
}