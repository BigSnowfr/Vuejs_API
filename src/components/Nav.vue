<template>
    <nav class="navbar navbar-default">
        <div class="container">
            <ul class="nav navbar-nav">
                <li><a v-link="'chuck'">Chuck Norris</a></li>
                <li><a v-link="'vegetaux'">Végétaux</a></li>

            </ul>
        </div>
    </nav>
    <div class="container">
        <router-view></router-view>
    </div>
</template>

<script>
    import auth from '../auth'
    export default {
        data() {
            return {
                user: auth.user
            }
        },
        methods: {
            logout() {
                auth.logout()
            }
        }
    }
</script>