<template>
  <!-- Modal -->
  <div
    class="modal fade"
    :id="modeldata.controls"
    tabindex="-1"
    data-keyboard="false"
    data-backdrop="static"
    :aria-labelledby="modeldata.tab"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <h5>{{ modeldata.title }}</h5>
          <div class="mt-4">
            <span class="ms-4">
              <svg
                class="ms-2"
                xmlns="http://www.w3.org/2000/svg"
                width="12.865"
                height="11.875"
                viewBox="0 0 12.865 11.875"
              >
                <path
                  id="icons8_telephone"
                  d="M7.433,2c-.541,0-1.028.019-1.484.046V2.039c-.035,0-.066.008-.1.008a14.827,14.827,0,0,0-3.336.526,2.221,2.221,0,0,0-1.032.7A1.869,1.869,0,0,0,1,4.474V5.958H3.977l.043-.448A4.64,4.64,0,0,1,4.379,4.2a2.353,2.353,0,0,1,.6-.831,1.371,1.371,0,0,1,.665-.317c.066,0,.112-.012.182-.019,0,0,.008,0,.012,0,.475-.027,1.005-.046,1.593-.046s1.117.019,1.593.046c0,0,.008,0,.012,0s.031,0,.05.008c.046,0,.085.008.131.012a1.371,1.371,0,0,1,.665.317,2.352,2.352,0,0,1,.6.831,4.639,4.639,0,0,1,.36,1.307l.039.448h2.98V4.474a1.868,1.868,0,0,0-.479-1.2,2.221,2.221,0,0,0-1.032-.7,14.828,14.828,0,0,0-3.336-.526c-.035,0-.066-.008-.1-.008v.008C8.461,2.019,7.974,2,7.433,2ZM3.764,3.3a4.07,4.07,0,0,0-.282.5,3.408,3.408,0,0,0-.325,1.175H1.99V4.474a.943.943,0,0,1,.247-.561,1.291,1.291,0,0,1,.564-.39A9.495,9.495,0,0,1,3.764,3.3Zm7.337,0a9.864,9.864,0,0,1,.966.228,1.3,1.3,0,0,1,.561.39.943.943,0,0,1,.247.561v.495H11.708a3.469,3.469,0,0,0-.321-1.175A4.688,4.688,0,0,0,11.1,3.3ZM4.958,5.958V7.01l-.046.031a10.757,10.757,0,0,0-1.43,1.307A4.752,4.752,0,0,0,1.99,11.4v.99a1.49,1.49,0,0,0,1.484,1.484h7.917a1.49,1.49,0,0,0,1.484-1.484V11.4a4.766,4.766,0,0,0-1.488-3.054A10.92,10.92,0,0,0,9.953,7.041L9.907,7.01V5.958h-.99v.99H5.948v-.99Zm.433,1.979H9.474a8.553,8.553,0,0,1,1.179,1.075A4.109,4.109,0,0,1,11.886,11.4v.99a.488.488,0,0,1-.495.495H3.474a.488.488,0,0,1-.495-.495V11.4A4.124,4.124,0,0,1,4.209,9.012,8.719,8.719,0,0,1,5.391,7.938Zm-.433.99v.99h.99v-.99Zm1.979,0v.99h.99v-.99Zm1.979,0v.99h.99v-.99ZM4.958,10.907v.99h.99v-.99Zm1.979,0v.99h.99v-.99Zm1.979,0v.99h.99v-.99Z"
                  transform="translate(-1 -2)"
                  fill="#392c23"
                />
              </svg>
              {{ modeldata.phone }}
            </span>
            <span>
              <svg
                class="ms-2"
                xmlns="http://www.w3.org/2000/svg"
                width="16.83"
                height="23.213"
                viewBox="0 0 16.83 23.213"
              >
                <path
                  id="icons8_marker"
                  d="M11.415,1A8.431,8.431,0,0,0,3,9.415a10.142,10.142,0,0,0,1.269,4.234,39.189,39.189,0,0,0,2.663,4.53c1.92,2.886,3.833,5.233,3.833,5.233l.651.8.651-.8s1.913-2.347,3.839-5.233a40.1,40.1,0,0,0,2.656-4.53A10.142,10.142,0,0,0,19.83,9.415,8.431,8.431,0,0,0,11.415,1Zm0,1.683a6.72,6.72,0,0,1,6.732,6.732,9.392,9.392,0,0,1-1.1,3.5A40.247,40.247,0,0,1,14.5,17.251c-1.545,2.314-2.6,3.589-3.09,4.207-.493-.618-1.545-1.893-3.09-4.207a40.227,40.227,0,0,1-2.544-4.339,9.391,9.391,0,0,1-1.1-3.5A6.72,6.72,0,0,1,11.415,2.683Zm0,5.049A1.683,1.683,0,1,0,13.1,9.415,1.686,1.686,0,0,0,11.415,7.732Z"
                  transform="translate(-3 -1)"
                  fill="#392c23"
                />
              </svg>
              {{ modeldata.address }}
            </span>
          </div>
          <div class="">
            <h5 class="mt-4">أعضاء لجنة الحي</h5>
            <div class="row mt-4 m">
              <div
                class="col"
                v-for="list in modeldata.Childimag"
                :key="list.id"
              >
                <img :src="list.image" />
                <h5 class="p-3 text-center" style="color: #cf2a45">
                  {{ list.title }}
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    modeldata: Object,
  },
};
</script>

<style scoped>
@media screen and (max-width: 767px) {
  .modal-body {
    height: 750px !important;
    overflow: hidden !important;
  }
  .modal-dialog.modal-dialog-centered.modal-lg {
    margin-top: 24px;
    top: 80% !important;
    left: 0% !important;
  }
}
@media screen and (min-width: 992px) {
  .modal-body {
    height: 350px !important;
    overflow: hidden !important;
  }
  .modal-dialog.modal-dialog-centered.modal-lg {
    margin-top: 24px;
    top: 11% !important;
    left: 5% !important;
  }
}
@media screen and (min-width: 768px) and (max-width: 991px) {
  .modal-body {
    height: 560px !important;
    overflow: hidden !important;
  }
  .modal-dialog.modal-dialog-centered.modal-lg {
    margin-top: 24px;
    top: 15% !important;
    left: 17% !important;
  }
}
.modal-body h5 {
  margin-bottom: 10px;
  font-size: 16px;
  color: #392c23;
  font-family: "FFShamelFamily-SansOneBold";
}
.modal-body span {
  color: #392c23;
  font-size: 14px;
}
.modal-body p {
  font-size: 14px;
  color: #392c23;
}
.m {
  text-align: center;
}
@media (min-width: 576px) {
  .modal-dialog {
    margin-right: auto;
    margin-left: 0 !important;
  }
}
</style>
