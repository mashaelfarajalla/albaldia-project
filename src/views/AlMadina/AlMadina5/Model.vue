<template>
  <div
    class="modal fade"
    :id="modeldata.controls"
    tabindex="-1"
    :aria-labelledby="modeldata.tab"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-xl">
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
          <div class="row justify-content-between">
            <div class="col-lg-7" style="padding-right: 40px">
              <h5 class="modal-title">{{ modeldata.title }}</h5>
              <p>
                {{ modeldata.p1 }}
              </p>
              <p>
                {{ modeldata.p2 }}
              </p>
              <p>
                {{ modeldata.p3 }}
              </p>
              <div>
                <h5>اهداف المركز</h5>
                <p>
                  {{ modeldata.alahdaf }}
                </p>
                <ol>
                  <li v-for="list in modeldata.alahdafchild" :key="list.id">
                    {{ list.child }}
                  </li>
                </ol>
              </div>
            </div>
            <div class="col-lg-5">
              <img :src="modeldata.iamge" class="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
export default {
  name: "DataModel",
  props: {
    modeldata: Object,
  },
  data() {
    return {};
  },
};
</script>

<style>


.modal-body {
  height: 408px;
  overflow-y: scroll;
}

.modal {
  --bs-modal-border-color: white !important;
}
.modal-header {
  border-bottom: 0 !important;
}
.modal-backdrop.show {
  z-index: -1;
}

.modal-backdrop {
  background-color: transparent !important;
}

.modal-body h5 {
  margin-bottom: 10px;
  font-size: 16px;
  color: #392c23;
  font-family: "FFShamelFamily-SansOneBold";
}

.modal-body p,
ol li {
  font-size: 14px;
  color: #392c23;
}

@media (min-width: 1200px) {
  .modal-xl {
    --bs-modal-width: 934px !important;
  }
}
@media (min-width: 576px) {
  .modal-dialog {
    margin-right: auto;
    margin-left: 30px !important;
  }
}
.modal-dialog-centered {
  min-height: calc(100% - var(--bs-modal-margin) * 1);
}
</style>
