﻿

using FinnStock.SQLWork;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Cors;


namespace FinnStock.DependencyInjection
{
    public static class ConfigureServicesExtension
    {

        public static IServiceCollection ConfigureServices(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddDbContext<ApplicationDbContext>(options =>
                options.UseSqlServer(configuration.GetConnectionString("DefaultConnection"))); //ServiceLifetime.Transient

            services.AddCors((options) => {
                options.AddDefaultPolicy((builder) => { 
                    builder.WithOrigins("*");
                    builder.WithOrigins(configuration.GetSection("AllowedOrigin").Value);
                });
            });


            return services;
        }

    }
}

