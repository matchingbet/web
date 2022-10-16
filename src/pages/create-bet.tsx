import { Button, TextField, ThemeProvider, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import { styled } from "@mui/system";
import { Field, Form, Formik, FormikHelpers, FormikProps } from "formik";
import * as yup from 'yup';
import CustomHeader from "../containers/CustomHeader";
import SectionTitle from "../containers/SectionTitle";

const StyledPageContainer = styled("div")({
    height: "100vh"
})

const StyledContainer = styled(Container)({
    height: "80vh"
})

const StyledForm = styled(Form)({
    height: "60vh",
    display: "flex",
    color: "white",
    flexDirection: "column",
    justifyContent: "space-between"
})

const StyledFields = styled("div")({
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

const CreateBetPage = () => {
    return (
        <StyledPageContainer>
            <CustomHeader />
            <StyledContainer>
                <SectionTitle
                    title={"Criar Matches"} description="Preencha os campos abaixo para criar sua aposta." />
                <CreateBetForm />
            </StyledContainer>
        </StyledPageContainer>
    );
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

                    <StyledFields>
                        <Field as={TextField}
                            key="category"
                            id="category"
                            name="category"
                            label="Categoria"
                            placeholder="Escolha uma categoria"
                            className="form-field"
                            variant="outlined"
                            error={formik.touched.category && Boolean(formik.errors.category)}
                            helperText={formik.touched.category && formik.errors.category} />

                        <Field as={TextField}
                            key="event"
                            id="event"
                            name="event"
                            label="Evento"
                            placeholder="Escolha um evento"
                            className="form-field"
                            variant="outlined"
                            error={formik.touched.description && Boolean(formik.errors.description)}
                            helperText={formik.touched.description && formik.errors.description} />

                        <Field as={TextField}
                            key="match"
                            id="match"
                            name="match"
                            label="Match"
                            placeholder="ex: ambos marcam"
                            className="form-field"
                            variant="outlined"
                            error={formik.touched.description && Boolean(formik.errors.description)}
                            helperText={formik.touched.description && formik.errors.description} />
                    </StyledFields>


                    <Button variant="contained">CONFIRMAR E PROSSEGUIR</Button>

                </StyledForm>
            )}

        </Formik>
    );
}

export default CreateBetPage;