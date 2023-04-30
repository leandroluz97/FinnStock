using FinnStock.Domain;
using FinnStock.Dtos;

namespace FinnStock.Business.Abstractions
{
    public interface IJwtService
    {
        ResponseToken CreateJWToken(User user);
    }
}