using StackExchange.Redis;
using NRedisStack;
using FinnStock.Infrastructure.Abstractions.Cache;
using Newtonsoft.Json;
using Microsoft.Extensions.Configuration;

namespace FinnStock.Cache
{
    public class CacheRepository : ICacheRepository
    {
        private readonly IDatabase _db;
        private readonly IConfiguration _configuration;
        public CacheRepository(IConfiguration configuration)
        {
            _configuration = configuration;
            _db = ConnectionMultiplexer.Connect(_configuration["Redis:Base_Url"]).GetDatabase();
        }

        public T GetData<T>(string key)
        {
            var value = _db.StringGet(key);
            if (!string.IsNullOrEmpty(value))
            {
                return JsonConvert.DeserializeObject<T>(value);
            }
            return default;
        }

        public object RemoveData(string key)
        {
            bool _isKeyExist = _db.KeyExists(key);
            if (_isKeyExist == true)
            {
                return _db.KeyDelete(key);
            }
            return false;
        }

        public bool SetData<T>(string key, T value, DateTimeOffset expirationTime)
        {
            TimeSpan expiryTime = expirationTime.DateTime.Subtract(DateTime.Now);
            var isSet = _db.StringSet(key, JsonConvert.SerializeObject(value), expiryTime);
            return isSet;
        }
    }
}