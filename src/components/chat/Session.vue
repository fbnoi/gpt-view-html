<template>
    <div class="container h-100" id="chat-ui">
        <div class="d-flex flex-column h-100 position-relative">
            <!-- Chat: Content -->
            <div class="chat-body hide-scrollbar flex-1 h-100">
                <div class="chat-body-inner" style="padding-bottom: 87px">
                    <div class="pt-3 pt-lg-5" id="message-list" v-cloak>
                        <div class="message">
                            <a href="#" data-bs-toggle="modal" data-bs-target="#modal-user-profile"
                                class="avatar avatar-responsive">
                                <svg t="1679135233223" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" p-id="3056"
                                    xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200">
                                    <path
                                        d="M510.72 64.64c247.424 0 448 200.576 448 448s-200.576 448-448 448-448-200.576-448-448 200.576-448 448-448zM637.76 544H384a128 128 0 0 0-128 130.24l0.032 29.792L256 704v87.68a379.008 379.008 0 0 0 448 47.392v2.528a406.4 406.4 0 0 0 64-41.6l-0.032-8.256 0.032-0.032v-118.4A128 128 0 0 0 637.76 544zM512 232.32a128 128 0 1 0 0 256 128 128 0 0 0 0-256z"
                                        fill="#8a8a8a" p-id="3057"></path>
                                </svg>
                            </a>
                            <div class="message-inner">
                                <div class="message-time">
                                    <span class="fxs text-muted">Mar 20, 2:53 pm</span>
                                </div>
                                <div class="message-body">
                                    <div class="message-content">
                                        <div class="message-text">
                                            hello sir, may i help you?
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="chat-footer pb-3 pb-lg-7 position-absolute bottom-0 start-0">
                <div class="dz-preview" id="dz-preview-row" data-horizontal-scroll=""></div>
                <div class="chat-form rounded-pill" data-emoji-form="">
                    <div class="row align-items-center gx-0">
                        <div class="col-auto">
                            <a href="#" class="btn btn-icon btn-link text-body rounded-circle dz-clickable" id="dz-btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="feather feather-paperclip">
                                    <path
                                        d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48">
                                    </path>
                                </svg>
                            </a>
                        </div>
                        <div class="col">
                            <div class="input-group">
                                <textarea class="form-control px-0 chat-input" placeholder="Type your message..." rows="1"
                                    data-emoji-input="" data-autosize="true"
                                    style="overflow: hidden; overflow-wrap: break-word; resize: none; height: 47.2px;"></textarea>
                            </div>
                        </div>
                        <div class="col-auto">
                            <button class="btn btn-icon btn-primary rounded-circle ms-3 message-send">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="feather feather-send">
                                    <line x1="22" y1="2" x2="11" y2="13"></line>
                                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <!-- Chat: Form -->
            </div>
            <!-- Chat: Footer -->
        </div>
    </div>
</template>