<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
    <div class="tab-content h-100" role="tablist">
        <div class="tab-pane fade h-100 show active" id="tab-content-chats" role="tabpanel">
            <div class="d-flex flex-column h-100 position-relative">
                <div class="hide-scrollbar">
                    <div class="container pt-5 pb-5 ps-3 pe-3">
                        <!-- Title -->
                        <div class="mb-5">
                            <h2 class="fs-2 fw-bold m-0">Chats</h2>
                        </div>
                        <!-- Chats -->
                        <div class="card-list">
                            <!-- Card -->
                            <router-link to="/sessions/slug">
                                <a class="card border-0 text-reset">
                                    <div class="card-body">
                                        <div class="gx-5">
                                            <div class="d-flex align-items-center">
                                                <div class="line-clamp me-auto text-truncate">
                                                    Hello! Yeah, I'm going to meet my friend of mine at the
                                                    departments stores now.
                                                </div>
                                            </div>
                                            <div class="d-block mt-2">
                                                <span class="text-muted fxs ms-2 float-end">12:45 PM</span>
                                                <span class="clearfix"></span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </router-link>
                            <!-- Card -->
                        </div>
                        <!-- Chats -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>