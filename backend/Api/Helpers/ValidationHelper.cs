using Api.Exceptions;
using FluentValidation;

namespace Api.Helpers
{

    public static class ValidationHelper
    {
        public static void Validar<T>(T dto, IValidator<T> validator)
        {
            var result = validator.Validate(dto);

            if (!result.IsValid)
            {
                throw new BadRequestException(result.Errors.First().ErrorMessage);
            }
        }
    }

}
