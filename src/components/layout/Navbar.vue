<template>
    <div>
        <nav>
            <div class="nav-wrapper purple darken-4">
            <router-link to="/"><span class="brand-logo">VueTaskList</span></router-link>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><router-link to='/about'>About</router-link></li>
                <li><router-link to='/contact'>Contact</router-link></li>
            </ul>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'Navbar',
    
}
</script>