
<script setup lang="ts">
// import { mapState } from 'pinia'
// import { useRootStore } from '~/store/rootStore'
// const rootStore = useRootStore()

const isLoggedIn = ref(false)

const authFormFields = [
    {
        type: 'email',
        required: true,
    },
    {
        type: 'password',
        required: true,
    },
    {
        type: 'given_name',
        label: 'First name',
        placeholder: 'First name',
        name: 'given_name',
        required: true,
    },
    {
        type: 'family_name',
        label: 'Family name',
        placeholder: 'Last name',
        name: 'family_name',
        required: true,
    },
    {
        type: 'phone_number',
        label: 'Phone Number',
        placeholder: 'Ex: +1(425)555-1212',
        name: 'phone_number',
        required: true,
    },
]

</script>

<template>
    <!--eslint-disable vue/attribute-hyphenation ! -->
    <!--eslint-disable vue/no-deprecated-slot-attribute ! -->

    <!-- See here for documentation -->
    <!-- https://docs.amplify.aws/ui/auth/authenticator/q/framework/react#props-slots-amplify-authenticator -->
    <div class="rounded-md">
        <amplify-authenticator v-if="isLoggedIn !== true" validation-errors>
            <amplify-sign-in slot="sign-in" header-text />

            <amplify-sign-up
                slot="sign-up"
                header-text
                username-alias="email"
                :formFields="authFormFields"
            />

            <amplify-totp-setup slot="totp-setup"></amplify-totp-setup>

            <amplify-sign-out></amplify-sign-out>
        </amplify-authenticator>
    </div>
</template>

    <style>
amplify-authenticator {
    --container-height: 50vh;
    margin: 0 auto;
    padding: 20vmin 5vmin;
}

amplify-sign-out,
amplify-authenticator,
amplify-sign-up {
    font-family: "Inter var", "Open Sans", sans-serif;
    font-size: var(--amplify-text-sm);
    --amplify-font-family: $typography-font-family;
    --amplify-primary-color: #4f46e5;
}

amplify-authenticator {
    --box-shadow: 0;
}

:root {
    --amplify-primary-color: #4f46e5;
    --amplify-primary-tint: #4f46e5;
    --amplify-primary-shade: #4f46e5;
}
</style>
