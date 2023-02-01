import * as yup from "yup";


export const LoginSchema = yup.object({
    login: yup
        .string()
        .required('Veuillez renseigner votre nom d\'utilisateur.')
        .matches(/^[\w -]{3,}$/, "N'utilisez que des lettres, 3 minimum"),
    password: yup
        .string()
        .required('Veuillez renseigner votre mot de passe.')
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/, "Format de mot de passe incorrect."),
}).required()

export const getSignupSchema = (data) => {

    return yup.object({
        login: yup
            .string()
            .test('already','Login déjà existant', (value) => !data.includes(value))
            .required('Nom d\'utilisateur requis.')
            .matches(/^[\w -]{3,}$/, "Uniquement des lettres, 3 minimum"),
        password: yup
            .string()
            .required('Mot de passe requis.')
            .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/, "Format incorrect."),
        passwordConfirmation: yup
            .string()
            .test("confirmPassword", "Mot de passe différent.", (value, ctx) => (value === ctx.parent.password)),
        firstname: yup
            .string('Prénom incorrect.')
            .required('Prénom requis.')
            .matches(/^[\w -]{3,}$/, 'Prénom incorrect.'),
        lastname: yup
            .string('Nom incorrect.')
            .required('Nom requis.')
            .matches(/^[\w -]{3,}$/, 'Nom incorrect.'),
        email: yup
            .string('Email incorrect')
            .required('Email requis.')
            .matches(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/, 'Email incorrect'),
        phone: yup
            .string()
            .required("Numéro de téléphone requis.")
            // https://stackoverflow.com/questions/38483885/regex-for-french-telephone-numbers
            .matches(/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/, 'Numéro de téléphone invalide.'),
    })

} 



export const TaskSchema = yup.object({
    label: yup
        .string()
        .required('Nom de la tâche requis.')
        .matches(/^[\w -]{3,}$/, "Uniquement des lettres, 3 minimum"),
}).required()
