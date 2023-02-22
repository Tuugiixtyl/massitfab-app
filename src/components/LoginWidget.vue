<template>
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content flex-col lg:flex-row-reverse">
      <div class="text-center lg:text-left">
        <h1 class="text-5xl font-bold">Login now!</h1>
        <p class="py-6">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
          id nisi.
        </p>
      </div>
      <div class="card w-full max-w-sm flex-shrink-0 bg-base-100 shadow-2xl">
        <div class="card-body">
          <div class="form-control">
            <label class="label">
              <span class="label-text">Username or Email Address</span>
            </label>
            <input
              type="text"
              placeholder="email"
              class="input-bordered input"
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              class="input-bordered input"
            />
            <label class="label">
              <a href="#" class="link-hover label-text-alt link"
                >Forgot password?</a
              >
            </label>
          </div>
          <div class="form-control mt-6">
            <button class="btn-primary btn">Login</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
