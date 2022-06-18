import styled from "@emotion/styled";
import { Checkbox, FormControlLabel, TextField } from "@mui/material";
import { Container } from "@mui/system";
import { useFormik } from "formik";
import * as yup from 'yup';
import CustomButton from "../components/CustomButton";
import { Logo } from "../components/Logo/Logo";

import { DateTimePicker, DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import DatePickerLocalizationProvider from "../components/DatePickerLocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

const validationSchema = yup.object({
    firstName: yup
        .string()
        .required("Nome obrigatorio."),
    lastName: yup
        .string()
        .required("Sobrenome obrigatorio."),
    cpf: yup
        .string()
        .required("CPF obrigatorio."),
    birthDate: yup
        .date()
        .required("Data de nascimento obrigatoria."),
    email: yup
        .string()
        .email()
        .required("email obrigatorio."),
    password: yup
        .string()
        .required("password obrigatorio."),
    acceptedTerms: yup
        .boolean()
        .required()
});

export default function Register() {

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            cpf: "",
            birthDate: "",
            email: "",
            password: "",
            acceptedTerms: false
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    const StyledForm = styled("form")({
        display: "flex",
        flexDirection: "column",
        ".cpf-birthDate": {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            "& > *": {
                width: "49%"
            }
        },
        ".form-field": {
            margin: "2vh 0"
        },
        ".submit-button-terms": {
            margin: "2vh 0"
        }
    })

    const StyledContainer = styled("div")({
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh"
    })

    const StyledPageContainer = styled(Container)({
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        height: "75vh"
    })

    return (
        <StyledContainer>
            <StyledPageContainer>
                <Logo size={125} onClick={() => console.log("cliquei no logo")} />

                <div>
                    <StyledForm onSubmit={formik.handleSubmit}>
                        <TextField
                            id="firstName"
                            name="firstName"
                            type="text"
                            placeholder="Nome"
                            className="form-field"
                            variant="standard"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.firstName}
                            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                            helperText={formik.touched.firstName && formik.errors.firstName} />

                        <TextField
                            id="lastName"
                            name="lastName"
                            type="text"
                            placeholder="Sobrenome"
                            className="form-field"
                            variant="standard"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.lastName}
                            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                            helperText={formik.touched.lastName && formik.errors.lastName} />

                        <div className="cpf-birthDate">
                            <TextField
                                id="cpf"
                                name="cpf"
                                type="text"
                                placeholder="CPF"
                                className="form-field"
                                variant="standard"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.cpf}
                                error={formik.touched.cpf && Boolean(formik.errors.cpf)}
                                helperText={formik.touched.cpf && formik.errors.cpf} />

                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DesktopDatePicker
                                    label="Data de Nascimento"
                                    inputFormat="MM/dd/yyyy"
                                    onChange={formik.handleChange}
                                    value={formik.values.birthDate}
                                    renderInput={(params) =>
                                        <TextField
                                            {...params}
                                            variant="standard"
                                            helperText={formik.touched.birthDate && formik.errors.birthDate}
                                            error={formik.touched.cpf && Boolean(formik.errors.cpf)} />}
                                />
                            </LocalizationProvider>
                        </div>

                        <TextField
                            id="email"
                            name="email"
                            type="text"
                            placeholder="Email"
                            className="form-field"
                            variant="standard"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email} />

                        <TextField
                            id="password"
                            name="password"
                            type="text"
                            placeholder="Senha"
                            className="form-field"
                            variant="standard"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password} />

                        <FormControlLabel
                            value="end"
                            className="submit-button-terms"
                            control={<Checkbox id="acceptedTerms" onChange={formik.handleChange} value={formik.values.acceptedTerms} />}
                            sx={{
                                color: "#4A4A4A"
                            }}
                            label="Li e aceito os Termos e Condições de Uso e a Política de Privacidade. "
                            labelPlacement="end"
                        />

                        <CustomButton
                            color="primary"
                            variant="contained"
                            className="submit-button-terms"
                            fullWidth
                            type="submit"
                        >
                            CADASTRAR
                        </CustomButton>

                    </StyledForm>
                </div>
            </StyledPageContainer>
        </StyledContainer>
    )
}