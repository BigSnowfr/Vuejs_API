<template>
    <nav class="navbar navbar-default">
        <div class="container">
            <ul class="nav navbar-nav">
                <li><a v-link="'vegetaux'">Végétaux</a></li>
                <li><a v-link="'movie'">Movie</a></li>

            </ul>
        </div>
    </nav>
    <div class="container">
        <router-view></router-view>
    </div>
</template>