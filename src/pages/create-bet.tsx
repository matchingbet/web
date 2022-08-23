import { TextField, ThemeProvider, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import { styled } from "@mui/system";
import { Field, Form, Formik, FormikHelpers, FormikProps } from "formik";
import * as yup from 'yup';
import CustomHeader from "../components/CustomHeader";
import { internalTheme } from "../styles/theme";

const CreateBetPage = () => {
    return (
        <ThemeProvider theme={internalTheme}>
            <CustomHeader />
            <Container>
                <CreateBetForm />
            </Container>
        </ThemeProvider>

    );
};


const StyledForm = styled(Form)({
    height: "100%",
    display: "flex",
    color: "white",
    flexDirection: "column",
    ".form-field": {
        margin: "1vh 0"
    },
    ".submit-button-terms": {
        margin: "2vh 0",
    }
})

const validationSchema = yup.object({
    categoria: yup
        .string()
        .required("Categoria obrigatória."),
});

const initialValues: BetCreation = {
    category: "",
    description: ""
};

interface BetCreation {
    category: string;
    description: string
}

const onSubmit = (
    user: BetCreation,
    { setSubmitting, resetForm }: FormikHelpers<BetCreation>
) => {
    setSubmitting(true);
};

const CreateBetForm = () => {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {(formik: FormikProps<BetCreation>) => (
                <StyledForm onSubmit={formik.handleSubmit}>
                    <Typography variant="body2">
                        Criar um Match
                    </Typography>

                    <Field as={TextField}
                        key="category"
                        id="category"
                        name="category"
                        label="Categoria"
                        placeholder="Adicione uma categoria (ou até x)"
                        className="form-field"
                        variant="standard"
                        error={formik.touched.category && Boolean(formik.errors.category)}
                        helperText={formik.touched.category && formik.errors.category} />

                    <Field as={TextField}
                        key="description"
                        id="description"
                        name="description"
                        label="Descrição do Match"
                        placeholder="Descreva seu Match"
                        multiline
                        rows={4}
                        variant="filled"
                        error={formik.touched.description && Boolean(formik.errors.description)}
                        helperText={formik.touched.description && formik.errors.description} />

                </StyledForm>
            )}

        </Formik>
    );
}

export default CreateBetPage;