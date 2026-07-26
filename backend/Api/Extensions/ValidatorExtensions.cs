using Api.Validators;
using FluentValidation;

namespace Api.Extensions
{
    public static class ValidatorExtensions
    {
        public static IServiceCollection AddValidators(this IServiceCollection services)
        {
            services.AddValidatorsFromAssemblyContaining<UsuarioValidators>();
            services.AddValidatorsFromAssemblyContaining<AuthValidators>();
            services.AddValidatorsFromAssemblyContaining<PasswordValidators>();
            services.AddValidatorsFromAssemblyContaining<RegistroUsuarioValidators>();

            return services;
        }
    }
}
