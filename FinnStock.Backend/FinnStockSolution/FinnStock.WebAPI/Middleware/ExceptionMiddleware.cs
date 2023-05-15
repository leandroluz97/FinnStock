using FinnStock.Services.Exceptions;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using System.Net;
using System.Threading.Tasks;

namespace FinnStock.WebAPI.Middleware
{
    // You may need to install the Microsoft.AspNetCore.Http.Abstractions package into your project
    public class ExceptionMiddleware
    {
        private readonly RequestDelegate _next;
        private readonly ILogger<ExceptionMiddleware> _logger;

        public ExceptionMiddleware(RequestDelegate next, ILogger<ExceptionMiddleware> logger)
        {
            _next = next;
            _logger = logger;
        }

        public async Task InvokeAsync(HttpContext httpContext)
        {
            try
            {
                await _next(httpContext);
            }
            catch (Exception ex)
            {
                _logger.LogError("{Exception} {errorMessage}", nameof(Exception), ex.Message);
                await HandleExceptionAsync(httpContext, ex);
            }

        }

        private Task HandleExceptionAsync(HttpContext httpContext, Exception exception)
        {

            if (exception is NotFoundException)
            {
                httpContext.Response.StatusCode = (int)HttpStatusCode.NotFound;
                return httpContext.Response.WriteAsJsonAsync(new
                {
                    StatusCode = httpContext.Response.StatusCode,
                    Description = exception.Message,
                });
            }

            if ((exception is ArgumentNullException) || (exception.InnerException is ArgumentException))
            {
                httpContext.Response.StatusCode = (int)HttpStatusCode.BadRequest;
                return httpContext.Response.WriteAsJsonAsync(new
                {
                    StatusCode = httpContext.Response.StatusCode,
                    Description = exception.Message,
                });
            }

            if (exception is UnauthorizedAccessException)
            {
                httpContext.Response.StatusCode = (int)HttpStatusCode.Unauthorized;
                return httpContext.Response.WriteAsJsonAsync(new
                {
                    StatusCode = httpContext.Response.StatusCode,
                    Description = exception.Message,
                });
            }

            httpContext.Response.StatusCode = (int)HttpStatusCode.InternalServerError;
            return httpContext.Response.WriteAsJsonAsync(new
            {
                StatusCode = httpContext.Response.StatusCode,
                Description = "Internal Server Error"
            });

        }
    }
}
