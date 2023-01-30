<template>
  <div
    class="modal fade"
    id="staticBackdrop"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <!-- <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5> -->
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <h6 class="mb-3">أقسام الإدارة العامة للشؤون الإدارية</h6>
          <div class="d-flex align-items-center">
            <span>1</span>
            <p>القسم الأول من أقسام الإدارة</p>
          </div>
          <div class="d-flex align-items-center">
            <span>2</span>
            <p>القسم الأول من أقسام الإدارة</p>
          </div>
          <div class="d-flex align-items-center">
            <span>3</span>
            <p>القسم الأول من أقسام الإدارة</p>
          </div>
          <div class="d-flex align-items-center">
            <span>4</span>
            <p>القسم الأول من أقسام الإدارة</p>
          </div>
          <div class="d-flex align-items-center">
            <span>5</span>
            <p>القسم الأول من أقسام الإدارة</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.modal-dialog.modal-dialog-centered {
  margin: auto !important;
}
div#staticBackdrop {
  background: rgb(255 255 255 / 68%);
}
.modal-body {
  height: auto !important;
  overflow-y: auto !important;
}
.modal-body h6 {
  color: #392c23;
  font-size: 16px;
  font-family: "FFShamelFamily-SansOneBold";
}
.modal-body span {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: white;
  border: 1px solid;
  color: #392c23;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  padding-top: 5px;
}
.modal-body p {
  font-size: 16px;
  color: #392c23;
  line-height: 3;
}
.modal-header .btn-close {
  margin: calc(-0.5 * var(--bs-modal-header-padding-y)) auto
    calc(-0.5 * var(--bs-modal-header-padding-y))
    calc(-0.5 * var(--bs-modal-header-padding-x));
}
</style>
