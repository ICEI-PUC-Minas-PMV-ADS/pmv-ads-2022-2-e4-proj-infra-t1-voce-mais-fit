<script>

export default {
    components: {

    },
    data(){
        return{

        }
    },
    methods: {
        saveData(id, email, password, userType, trainerInfo, gymgoerInfo){
            const userObject = {
                id: id,
                email: email,
                password: password,
                userType: userType,
                trainerInfo: trainerInfo,
                gymgoerInfo: gymgoerInfo,
            }
            localStorage.setItem("userObject", JSON.stringify(userObject))
        }
    }
}

</script>