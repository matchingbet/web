import styled from "@emotion/styled";
import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material";
import { Container } from "@mui/system";
import { Field, Form, Formik, FormikHelpers, FormikProps } from "formik";
import * as yup from 'yup';
import CustomButton from "../components/CustomButton";
import { Logo } from "../components/Logo/Logo";

import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useState } from "react";

interface UserCreation {
    firstName: string,
    lastName: string,
    cpf: string,
    birthDate: Date,
    email: string,
    password: string,
    acceptedTerms: boolean
}

const Register = () => {

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

    const initialValues: UserCreation = {
        firstName: "",
        lastName: "",
        cpf: "",
        birthDate: new Date(),
        email: "",
        password: "",
        acceptedTerms: false
    };

    const StyledForm = styled(Form)({
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
            margin: "1vh 0"
        },
        ".submit-button-terms": {
            margin: "2vh 0",
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

    const [value, setValue] = useState("");

    const onSubmit = (
        values: UserCreation,
        { setSubmitting, resetForm }: FormikHelpers<UserCreation>
    ) => {
        console.log(values)
        resetForm();
    };

    return (
        <StyledContainer>
            <StyledPageContainer>
                <Logo size={125} onClick={() => console.log("cliquei no logo")} />

                <div>
                    <Formik
                        initialValues={initialValues}
                        // validationSchema={validationSchema}
                        onSubmit={onSubmit}
                    >
                        {(formik: FormikProps<UserCreation>) => (
                            <StyledForm onSubmit={formik.handleSubmit}>
                                <Field as={TextField}
                                    key="firstName"
                                    id="firstName"
                                    name="firstName"
                                    label="Nome"
                                    placeholder="Nome"
                                    className="form-field"
                                    variant="standard"
                                    error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                                    helperText={formik.touched.firstName && formik.errors.firstName} />

                                <Field as={TextField}
                                    key="lastName"
                                    id="lastName"
                                    name="lastName"
                                    type="text"
                                    placeholder="Sobrenome"
                                    label="Sobrenome"
                                    className="form-field"
                                    variant="standard"
                                    error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                                    helperText={formik.touched.lastName && formik.errors.lastName}
                                />

                                <div className="cpf-birthDate">
                                    <Field as={TextField}
                                        id="cpf"
                                        name="cpf"
                                        type="text"
                                        placeholder="CPF"
                                        label="CPF"
                                        variant="standard"
                                        className="form-field"
                                        error={formik.touched.cpf && Boolean(formik.errors.cpf)}
                                        helperText={formik.touched.cpf && formik.errors.cpf}
                                    />

                                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                                        <DatePicker<Date>
                                            value={formik.values.birthDate}
                                            label="Data de nascimento"
                                            onChange={(newValue: Date | null, keyboardInputValue?: string | undefined) => {
                                                formik.setValues({ ...formik.values, birthDate: newValue! });
                                            }}
                                            renderInput={(params) =>
                                                <Field as={TextField}
                                                    id="birthDate"
                                                    name="birthDate"
                                                    variant="standard"
                                                    placeholder="dd/mm/yyyy"
                                                    className="form-field"
                                                    {...params}
                                                    error={formik.touched.birthDate && Boolean(formik.errors.birthDate)} />}
                                        />
                                    </LocalizationProvider>
                                </div>

                                <Field as={TextField}
                                    id="email"
                                    name="email"
                                    type="text"
                                    placeholder="Email"
                                    label="Email"
                                    className="form-field"
                                    variant="standard"
                                    error={formik.touched.email && Boolean(formik.errors.email)}
                                    helperText={formik.touched.email && formik.errors.email}
                                />

                                <Field as={TextField}
                                    id="password"
                                    name="password"
                                    type="text"
                                    placeholder="Senha"
                                    label="Senha"
                                    className="form-field"
                                    variant="standard"
                                    error={formik.touched.password && Boolean(formik.errors.password)}
                                    helperText={formik.touched.password && formik.errors.password}
                                />

                                <FormControlLabel
                                    value="end"
                                    className="submit-button-terms"
                                    control={<Checkbox id="acceptedTerms" onChange={formik.handleChange} />}
                                    sx={{
                                        color: "#4A4A4A"
                                    }}
                                    label="Li e aceito os Termos e Condições de Uso e a Política de Privacidade. "
                                    labelPlacement="end"
                                />

                                <Button
                                    color="primary"
                                    variant="contained"
                                    className="submit-button-terms"
                                    fullWidth
                                    type="submit"
                                >
                                    CADASTRAR
                                </Button>
                            </StyledForm>
                        )}
                    </Formik>
                </div>
            </StyledPageContainer>
        </StyledContainer>
    )
}

export default Register;