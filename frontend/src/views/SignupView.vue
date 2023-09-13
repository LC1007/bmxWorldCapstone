<template>
    <div>
        <div class="container custom-container">
            <div class="row d-flex justify-content-center align-content-center">
                <div class="col-12 col-lg-6 col-md-4">
                    <h1 class="text-center">Sign Up</h1>
                    <Form @submit="createUser">
                        <div class="mb-3">
                            <label for="name" class="form-label">Name</label>
                            <Field name="name" class="form-control" v-model="formData.firstName" type="text" :rules="required"/>
                                <ErrorMessage name="email" style="color: red"/>
                        </div>
                        <div class="mb-3">
                            <label for="surname" class="form-label">Surname</label>
                            <Field name="lastName" class="form-control" v-model="formData.lastName" type="text" :rules="required"/>
                                    <ErrorMessage name="email" style="color: red"/>
                        </div>
                        <div class="mb-3">
                            <label for="gender" class="form-label">Gender</label>
                            <Field name="gender" class="form-control" v-model="formData.gender" type="text" :rules="required"/>
                                        <ErrorMessage name="email" style="color: red"/>
                        </div>
                        <div class="mb-3">
                            <label for="dob" class="form-label">Date of Birth</label>
                            <Field name="dob" class="form-control" v-model="formData.userDOB" type="text" :rules="required"/>
                                        <ErrorMessage name="email" style="color: red"/>
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label">Email address</label>
                            <Field name="email" class="form-control" v-model="formData.emailAdd" type="email" :rules="validateEmail"/>
                            <ErrorMessage name="email" style="color: red"/>
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">Password</label>
                            <Field name="userPass" class="form-control" v-model="formData.userPass" type="password" :rules="required"/>
                                    <ErrorMessage name="email" style="color: red"/>
                        </div>
                        <div class="d-flex justify-content-center">
                            <button type="submit" class="btn btn-dark">Submit</button>
                        </div>
                    </Form>

                </div>
                <div class="col-12 col-lg-6 col-md-4">
                    <video width="100%" class="w-100" data-object-fit="cover" muted autoplay loop>
                        <source
                            src="https://player.vimeo.com/progressive_redirect/playback/684098096/rendition/540p?loc=external&signature=d7a3b70d4dabefd7e151554e9d2b1556f8d4be6fdd4c04abf24dcf27c6bb6a70">
                    </video>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex'
import { Form, Field, ErrorMessage  } from 'vee-validate';
export default {
    components: {
        ErrorMessage,
        Form,
        Field
    },
    data() {
        return {
            formData: {
                firstName: '',
                lastName: '',
                gender: '',
                userDOB: '',
                emailAdd: '',
                userPass: '',
                profileUrl: ''
            },
            errMsg: ''
        }
    },
    computed: {
        ...mapState('usermodule', ['errMsg'])
    },
    methods: {
        ...mapActions('usermodule', ['submitSignup']),
        ...mapMutations('usermodule', ['setErrMsg']),
        async createUser() {
            await this.submitSignup(this.formData)
        },



        validateEmail(value) {
            // if the field is empty
            if (!value) {
                return 'This field is required';
            }
            // if the field is not a valid email
            const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
            if (!regex.test(value)) {
                return 'This field must be a valid email';
            }
            // All is good
            return true;
        },

        required(value){
            if (!value) {
                return 'This field is required';
            }
            // All is good
            return true;
        }
    }
}

</script>

<style scoped>
.custom-container {
    display: grid;
    place-content: center;
    height: 100vh;
}

video {
    aspect-ratio: 1 / 1;
    object-fit: cover;
}
</style>