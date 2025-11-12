<template>
	<div>
		<nav class="navbar navbar-expand-lg bg-dark navbar-dark">
			<div class="container-fluid">
				<img src="../assets/batman.png" style="width: 75px;"/>
				<button
					class="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNavAltMarkup"
					aria-controls="navbarNavAltMarkup"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div class="navbar-nav">
						<router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
						<router-link class="nav-link" to="/login">Inicio Sesion</router-link>
						<router-link class="nav-link" to="/perfil">Perfil</router-link>
						<router-link class="nav-link" to="/subordinados">Subordinados</router-link>
					</div>
				</div>
			</div>
		</nav>
	</div>
</template>

<script>
export default {
	name: "MenuComponent",
};
</script>

<style lang="scss" scoped></style>
