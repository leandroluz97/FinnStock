using FinnStock.Domain;
using FinnStock.Dtos;
using System.Security.Claims;

namespace FinnStock.Business.Abstractions
{
    public interface IJwtService
    {
        ResponseToken CreateJWToken(User user);
        ClaimsPrincipal? GetPrincipalFromJwt(string? token);
    }
}