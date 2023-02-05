<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel"></h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <iframe
            width="420"
            height="345"
            :src="datassrc"
            muted
            autoplay
            controls
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["datassrc"],
};
</script>

<style scoped>
div#exampleModal {
  background-color: rgba(0, 0, 0, 0.8) !important;
}

.modal-dialog.modal-dialog-centered {
  margin-left: auto !important;
  margin-right: auto !important;
}

.modal-content {
  background-color: transparent !important;
  border-color: transparent !important;
}

.modal-body {
  overflow: hidden;
  width: 700px;
}
.modal-body iframe {
  width: 100%;
}
</style>
