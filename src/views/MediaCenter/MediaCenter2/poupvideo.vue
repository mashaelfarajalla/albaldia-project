<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModalvideo"
    tabindex="-1"
    aria-labelledby="exampleModalLabelvideo"
    aria-hidden="true"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
  >
    <div class="modal-dialog modal-fullscreen">
      <div class="modal-content">
        <div class="modal-header">
          <!-- <h5 class="modal-title" id="exampleModalLabel"></h5> -->
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="fa-regular fa-circle-xmark"></i>
          </button>
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
.modal-header .btn-close {
  margin: calc(1.5 * var(--bs-modal-header-padding-y))
    calc(7.5 * var(--bs-modal-header-padding-x))
    calc(-0.5 * var(--bs-modal-header-padding-y)) auto !important;
}
i.fa-regular.fa-circle-xmark {
  font-size: 35px;
  color: white;
}
div#exampleModalvideo {
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
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 100%;
}
.modal-body iframe {
  width: 50%;
}
</style>
