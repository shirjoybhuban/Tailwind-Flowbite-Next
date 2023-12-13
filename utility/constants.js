export const Constants = {
    DEFAULT_ERROR_TEXT: "Something went wrong. Please try again.",
    Api: {
        authentication: {
            registerWithEmailPassword: `${process.env.NEXT_PUBLIC_BASE_API_URL}/register`,
            loginWithEmailPassword: `${process.env.NEXT_PUBLIC_BASE_API_URL}/login`,
            forgotPassword: `${process.env.NEXT_PUBLIC_BASE_API_URL}/forgot-password`,
            resendVerificationEmail: `${process.env.NEXT_PUBLIC_BASE_API_URL}/email/verification-notification`,
            verifyEmail: `${process.env.NEXT_PUBLIC_BASE_API_URL}/email/verify/`,
            resetPassword: `${process.env.NEXT_PUBLIC_BASE_API_URL}/reset-password`,
            resendVerificationEmaill: `${process.env.NEXT_PUBLIC_BASE_API_URL}/resend-verification-email`
        },
        resources: {
            menuLinks: `${process.env.NEXT_PUBLIC_BASE_API_URL}/feResources/menu_links`,
            shipmentOptions: `${process.env.NEXT_PUBLIC_BASE_API_URL}/feResources/shipment_options`,
            dropOffLocations: `${process.env.NEXT_PUBLIC_BASE_API_URL}/feResources/dropoff_locations`,
            pickupTimes: `${process.env.NEXT_PUBLIC_BASE_API_URL}/feResources/pickup_times`,
            intent: `${process.env.NEXT_PUBLIC_BASE_API_URL}/account/payment/setup-intent`,
            loadingMessages: `${process.env.NEXT_PUBLIC_BASE_API_URL}/loading-messages`,
            provinceByCountry: `${process.env.NEXT_PUBLIC_BASE_API_URL}/addver/state-list`,
        },
        accountSettings: {
            accountDefaults: `${process.env.NEXT_PUBLIC_BASE_API_URL}/account-settings`,
        },
        buildShipments: {
            shipments: `${process.env.NEXT_PUBLIC_BASE_API_URL}/shipments`,
            pendingPayment: `${process.env.NEXT_PUBLIC_BASE_API_URL}/pay-pending-payment-shipments`,
            addOptionsToShipment: `${process.env.NEXT_PUBLIC_BASE_API_URL}/shipmentOptions`,
            removeInsuranceAPI: `${process.env.NEXT_PUBLIC_BASE_API_URL}/insurance-remove`,
            addInsuranceAPI: `${process.env.NEXT_PUBLIC_BASE_API_URL}/insurance-add`,
            internationalShipment: `${process.env.NEXT_PUBLIC_BASE_API_URL}/international-shipment`,
            internationalShipmentItems: `${process.env.NEXT_PUBLIC_BASE_API_URL}/international-shipment-item`,
        },
        users: {
            createUserProfile: `${process.env.NEXT_PUBLIC_BASE_API_URL}/userprofiles`,
            updateUser: `${process.env.NEXT_PUBLIC_BASE_API_URL}/users/`,
            userProfile: `${process.env.NEXT_PUBLIC_BASE_API_URL}/userprofiles/`,
            getLoginUser: `${process.env.NEXT_PUBLIC_BASE_API_URL}/user`,
            updateUserProfile: `${process.env.NEXT_PUBLIC_BASE_API_URL}/userprofiles/`,
            inviteUsers: `${process.env.NEXT_PUBLIC_BASE_API_URL}/invite-user`,
            updateInvitedUser: `${process.env.NEXT_PUBLIC_BASE_API_URL}/invite-user-update/`,
            deleteInvitedUser: `${process.env.NEXT_PUBLIC_BASE_API_URL}/invite-user-delete/`,
            inviteUserSetPassword: `${process.env.NEXT_PUBLIC_BASE_API_URL}/invited-user-set-password`,
            inviteUserSetOriginAddress: `${process.env.NEXT_PUBLIC_BASE_API_URL}/invited-user-set-origin-address`,
            inviteUsersList: `${process.env.NEXT_PUBLIC_BASE_API_URL}/invited-user-list`,
        },
        alerts: {
            alerts: `${process.env.NEXT_PUBLIC_BASE_API_URL}/alerts`,
        },
        trackingSettings: {
            tracking: `${process.env.NEXT_PUBLIC_BASE_API_URL}/account-settings/notification`,
        },
        addressBooks: {
            addressBook: `${process.env.NEXT_PUBLIC_BASE_API_URL}/address_books`,
            bulkUpload: `${process.env.NEXT_PUBLIC_BASE_API_URL}/address/bulk`,
        },
        billing:{
            billingCards: `${process.env.NEXT_PUBLIC_BASE_API_URL}/account/cards`,
        },
        historyTracking: {
            shipments: `${process.env.NEXT_PUBLIC_BASE_API_URL}/shipments`,
            getTrackingData: `${process.env.NEXT_PUBLIC_BASE_API_URL}/trackings`,
        },
        pickups:{
            pickupDefaults: `${process.env.NEXT_PUBLIC_BASE_API_URL}/pickups`,
        },
        dropOff: {
            dropOffs: `${process.env.NEXT_PUBLIC_BASE_API_URL}/dropoffs`
        },
        ltl: {
            ltlSendMail: `${process.env.NEXT_PUBLIC_BASE_API_URL}/ltl-send-mail`
        }
    },
};

export const XHR_STATE = Object.freeze({
    ASLEEP: 'ASLEEP',
    IN_PROGRESS: 'IN_PROGRESS',
    COMPLETE: 'COMPLETE'
});