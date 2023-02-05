<template>
  <header class="d-none d-lg-flex px-5 mb-3 border-bottom">
    <div class="container">
      <div class="divimg">
        <router-link :to="{ name: 'Home' }"
          ><img src="../assets/image/iconimag.png" />
        </router-link>
      </div>

      <div
        class="grid d-flex justify-content-between align-items-center text-center"
      >
        <div class="g-col g-col-md-4 d-flex">
          <div class="g-col-1 mx-2">
            <a
              href="index.html"
              class="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18.947"
                height="20"
                viewBox="0 0 18.947 20"
              >
                <g id="icons8_user" transform="translate(-3 -2)">
                  <circle
                    id="Ellipse_110"
                    data-name="Ellipse 110"
                    cx="5.5"
                    cy="5.5"
                    r="5.5"
                    transform="translate(7 2)"
                    fill="#392c23"
                  />
                  <path
                    id="Path_971"
                    data-name="Path 971"
                    d="M18.789,15H6.158a3.158,3.158,0,1,0,0,6.316H18.789a3.158,3.158,0,1,0,0-6.316Z"
                    transform="translate(0 0.684)"
                    fill="#392c23"
                  />
                </g>
              </svg>
            </a>
          </div>
          <div class="g-col-1 mx-2">
            <a
              href="/"
              class="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
              >
                <path
                  id="Subtraction_9"
                  data-name="Subtraction 9"
                  d="M2856,20a1.988,1.988,0,0,1-1.415-.586l-2.795-2.795a9,9,0,1,1,2.828-2.828l1.933,1.932.6.6.258.258A2,2,0,0,1,2856,20Zm-9-17a6,6,0,1,0,6,6A6.007,6.007,0,0,0,2847,3Z"
                  transform="translate(-2838)"
                  fill="#392c23"
                />
              </svg>
            </a>
          </div>

          <div class="g-col-1 mx-2">
            <a
              href="/"
              class="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
              >
                <g id="icons8_geography" transform="translate(-2 -1)">
                  <path
                    id="Path_973"
                    data-name="Path 973"
                    d="M12,2A10,10,0,1,0,22,12,10.011,10.011,0,0,0,12,2Zm6.918,6h-2.3a12.822,12.822,0,0,0-1.052-3.154A8.06,8.06,0,0,1,18.918,8ZM20,12a7.952,7.952,0,0,1-.263,2h-2.83c.06-.643.093-1.311.093-2s-.033-1.357-.093-2h2.83A7.952,7.952,0,0,1,20,12Zm-8,8c-.843,0-1.949-1.481-2.555-4h5.11C13.949,18.519,12.843,20,12,20ZM9.108,14a18.572,18.572,0,0,1,0-4h5.784A18.8,18.8,0,0,1,15,12a18.8,18.8,0,0,1-.108,2ZM4,12a7.952,7.952,0,0,1,.263-2h2.83C7.033,10.643,7,11.311,7,12s.033,1.357.093,2H4.263A7.952,7.952,0,0,1,4,12Zm8-8c.843,0,1.949,1.481,2.555,4H9.445C10.051,5.481,11.157,4,12,4Zm-3.56.846A12.822,12.822,0,0,0,7.388,8H5.082A8.056,8.056,0,0,1,8.44,4.846ZM5.082,16h2.3a12.822,12.822,0,0,0,1.052,3.154A8.059,8.059,0,0,1,5.082,16ZM15.56,19.154A12.864,12.864,0,0,0,16.612,16h2.3A8.048,8.048,0,0,1,15.56,19.154Z"
                    transform="translate(0 -1)"
                    fill="#392c23"
                  />
                </g>
              </svg>
            </a>
          </div>
          <div class="g-col-1 mx-2">
            <a
              class="dropdown-toggle"
              href="#"
              id="headerbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              العربية
            </a>
            <ul class="dropdown-menu" aria-labelledby="headerbarDropdown">
              <li><a class="dropdown-item" href="#">العربية</a></li>
              <li><a class="dropdown-item" href="#">الانجليزية</a></li>
            </ul>
          </div>
        </div>
        <div class="g-col g-col-md-4 d-flex">
          <div class="d-flex">
            <p class="ms-2">
              الإثنين 1 محرم 1443 - 09 أغسطس 2021 | 11:46 صباحا
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <g id="icons8_clock" transform="translate(-2 -2)">
                <path
                  id="Path_966"
                  data-name="Path 966"
                  d="M14.892,13.586,13.88,12.117a1.437,1.437,0,0,1-.287-.681L13.12,8.05A1.05,1.05,0,0,0,12.07,7h0a1.05,1.05,0,0,0-1.05,1.05L10.6,11.734a1.792,1.792,0,0,0,.623,1.57l2.181,1.767a1.049,1.049,0,0,0,1.485,0h0A1.052,1.052,0,0,0,14.892,13.586Z"
                  transform="translate(-0.121 -0.166)"
                  fill="#392c23"
                />
                <path
                  id="Path_967"
                  data-name="Path 967"
                  d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,17a7,7,0,1,1,7-7A7,7,0,0,1,12,19Z"
                  transform="translate(0 0)"
                  fill="#392c23"
                />
              </g>
            </svg>
          </div>
          <div class="d-flex me-3">
            <p>+42°C</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 28 28"
            >
              <path
                id="icons8_sun"
                d="M17.983,3.978A1.05,1.05,0,0,0,16.95,5.043v2.1a1.05,1.05,0,0,0,2.1,0v-2.1a1.05,1.05,0,0,0-1.066-1.064Zm-9.152,3.8a1.049,1.049,0,0,0-.731,1.8l1.485,1.484a1.051,1.051,0,1,0,1.486-1.485L9.586,8.091A1.05,1.05,0,0,0,8.832,7.774Zm18.3,0a1.05,1.05,0,0,0-.722.317L24.929,9.575a1.051,1.051,0,1,0,1.486,1.485L27.9,9.577a1.049,1.049,0,0,0-.764-1.8ZM18,10.29a7.7,7.7,0,1,0,7.7,7.7A7.714,7.714,0,0,0,18,10.29Zm0,2.1a5.6,5.6,0,1,1-5.6,5.6A5.583,5.583,0,0,1,18,12.389ZM5.05,16.936a1.049,1.049,0,1,0,0,2.1h2.1a1.049,1.049,0,1,0,0-2.1Zm23.8,0a1.049,1.049,0,1,0,0,2.1h2.1a1.049,1.049,0,1,0,0-2.1ZM10.307,24.594a1.05,1.05,0,0,0-.722.317L8.1,26.395A1.051,1.051,0,0,0,9.586,27.88L11.071,26.4a1.049,1.049,0,0,0-.764-1.8Zm15.353,0a1.049,1.049,0,0,0-.731,1.8l1.485,1.484A1.051,1.051,0,1,0,27.9,26.395l-1.485-1.484a1.05,1.05,0,0,0-.755-.317Zm-7.677,3.172A1.05,1.05,0,0,0,16.95,28.83v2.1a1.05,1.05,0,0,0,2.1,0v-2.1a1.05,1.05,0,0,0-1.066-1.064Z"
                transform="translate(-4 -3.978)"
                fill="#392c23"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </header>

  <header class="d-md-flex d-lg-none index">
    <label class="logo">
      <router-link :to="{ name: 'Home' }"
        ><img src="../assets/image/iconimag.png" />
      </router-link>
    </label>
    <div
      class="grid d-flex justify-content-between align-items-center text-center"
    >
      <div class="g-col g-col-md-4 d-flex">
        <div class="g-col-1 mx-2">
          <a
            href="index.html"
            class="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18.947"
              height="20"
              viewBox="0 0 18.947 20"
            >
              <g id="icons8_user" transform="translate(-3 -2)">
                <circle
                  id="Ellipse_110"
                  data-name="Ellipse 110"
                  cx="5.5"
                  cy="5.5"
                  r="5.5"
                  transform="translate(7 2)"
                  fill="#392c23"
                />
                <path
                  id="Path_971"
                  data-name="Path 971"
                  d="M18.789,15H6.158a3.158,3.158,0,1,0,0,6.316H18.789a3.158,3.158,0,1,0,0-6.316Z"
                  transform="translate(0 0.684)"
                  fill="#392c23"
                />
              </g>
            </svg>
          </a>
        </div>
        <div class="g-col-1 mx-2">
          <a
            href="/"
            class="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <path
                id="Subtraction_9"
                data-name="Subtraction 9"
                d="M2856,20a1.988,1.988,0,0,1-1.415-.586l-2.795-2.795a9,9,0,1,1,2.828-2.828l1.933,1.932.6.6.258.258A2,2,0,0,1,2856,20Zm-9-17a6,6,0,1,0,6,6A6.007,6.007,0,0,0,2847,3Z"
                transform="translate(-2838)"
                fill="#392c23"
              />
            </svg>
          </a>
        </div>

        <div class="g-col-1 mx-2">
          <a
            href="/"
            class="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <g id="icons8_geography" transform="translate(-2 -1)">
                <path
                  id="Path_973"
                  data-name="Path 973"
                  d="M12,2A10,10,0,1,0,22,12,10.011,10.011,0,0,0,12,2Zm6.918,6h-2.3a12.822,12.822,0,0,0-1.052-3.154A8.06,8.06,0,0,1,18.918,8ZM20,12a7.952,7.952,0,0,1-.263,2h-2.83c.06-.643.093-1.311.093-2s-.033-1.357-.093-2h2.83A7.952,7.952,0,0,1,20,12Zm-8,8c-.843,0-1.949-1.481-2.555-4h5.11C13.949,18.519,12.843,20,12,20ZM9.108,14a18.572,18.572,0,0,1,0-4h5.784A18.8,18.8,0,0,1,15,12a18.8,18.8,0,0,1-.108,2ZM4,12a7.952,7.952,0,0,1,.263-2h2.83C7.033,10.643,7,11.311,7,12s.033,1.357.093,2H4.263A7.952,7.952,0,0,1,4,12Zm8-8c.843,0,1.949,1.481,2.555,4H9.445C10.051,5.481,11.157,4,12,4Zm-3.56.846A12.822,12.822,0,0,0,7.388,8H5.082A8.056,8.056,0,0,1,8.44,4.846ZM5.082,16h2.3a12.822,12.822,0,0,0,1.052,3.154A8.059,8.059,0,0,1,5.082,16ZM15.56,19.154A12.864,12.864,0,0,0,16.612,16h2.3A8.048,8.048,0,0,1,15.56,19.154Z"
                  transform="translate(0 -1)"
                  fill="#392c23"
                />
              </g>
            </svg>
          </a>
        </div>
      </div>
    </div>

    <ul class="ul" :style="[open ? 'display:block;' : 'display:none;']">
      <li v-for="item in Header" :key="item.id">
        <a href="#" class="dropDown">
          <div>{{ item.title }}</div>
          <div>
            <i
              class="fa-solid fa-caret-down expand"
              :class="{ expanded: expanded }"
            ></i>
          </div>
        </a>
        <ul v-show="showicon" class="align-items-center justify-content-start">
          <router-link
            v-for="i in item.iconMun"
            :key="i.id"
            :to="{ name: `${i.name}` }"
            class="header-link routerlinka py-3"
            title=""
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            data-bs-original-title="Dashboard"
          >
            <span class="mx-2">
              <img :src="i.icon" />
            </span>
          </router-link>
        </ul>
      </li>
      <div class="g-col g-col-md-4">
        <div class="d-flex justify-content-center">
          <p>الإثنين 1 محرم 1443 - 09 أغسطس 2021 | 11:46 صباحا</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <g id="icons8_clock" transform="translate(-2 -2)">
              <path
                id="Path_966"
                data-name="Path 966"
                d="M14.892,13.586,13.88,12.117a1.437,1.437,0,0,1-.287-.681L13.12,8.05A1.05,1.05,0,0,0,12.07,7h0a1.05,1.05,0,0,0-1.05,1.05L10.6,11.734a1.792,1.792,0,0,0,.623,1.57l2.181,1.767a1.049,1.049,0,0,0,1.485,0h0A1.052,1.052,0,0,0,14.892,13.586Z"
                transform="translate(-0.121 -0.166)"
                fill="#392c23"
              />
              <path
                id="Path_967"
                data-name="Path 967"
                d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,17a7,7,0,1,1,7-7A7,7,0,0,1,12,19Z"
                transform="translate(0 0)"
                fill="#392c23"
              />
            </g>
          </svg>
        </div>
        <div class="d-flex me-3 justify-content-center">
          <p>+42°C</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 28 28"
          >
            <path
              id="icons8_sun"
              d="M17.983,3.978A1.05,1.05,0,0,0,16.95,5.043v2.1a1.05,1.05,0,0,0,2.1,0v-2.1a1.05,1.05,0,0,0-1.066-1.064Zm-9.152,3.8a1.049,1.049,0,0,0-.731,1.8l1.485,1.484a1.051,1.051,0,1,0,1.486-1.485L9.586,8.091A1.05,1.05,0,0,0,8.832,7.774Zm18.3,0a1.05,1.05,0,0,0-.722.317L24.929,9.575a1.051,1.051,0,1,0,1.486,1.485L27.9,9.577a1.049,1.049,0,0,0-.764-1.8ZM18,10.29a7.7,7.7,0,1,0,7.7,7.7A7.714,7.714,0,0,0,18,10.29Zm0,2.1a5.6,5.6,0,1,1-5.6,5.6A5.583,5.583,0,0,1,18,12.389ZM5.05,16.936a1.049,1.049,0,1,0,0,2.1h2.1a1.049,1.049,0,1,0,0-2.1Zm23.8,0a1.049,1.049,0,1,0,0,2.1h2.1a1.049,1.049,0,1,0,0-2.1ZM10.307,24.594a1.05,1.05,0,0,0-.722.317L8.1,26.395A1.051,1.051,0,0,0,9.586,27.88L11.071,26.4a1.049,1.049,0,0,0-.764-1.8Zm15.353,0a1.049,1.049,0,0,0-.731,1.8l1.485,1.484A1.051,1.051,0,1,0,27.9,26.395l-1.485-1.484a1.05,1.05,0,0,0-.755-.317Zm-7.677,3.172A1.05,1.05,0,0,0,16.95,28.83v2.1a1.05,1.05,0,0,0,2.1,0v-2.1a1.05,1.05,0,0,0-1.066-1.064Z"
              transform="translate(-4 -3.978)"
              fill="#392c23"
            />
          </svg>
        </div>

        <div class="align-items-center =">
          <p class="mb-2">
            جميع الحقوق محفوظة لدى <span class="span">بلدية غزة</span> &copy;
            2021
          </p>
          <div class="d-flex justify-content-center">
            <div class="square ms-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14.376"
                height="11.579"
                viewBox="0 0 14.376 11.579"
              >
                <path
                  id="icons8_twitter"
                  d="M18.269,8.369a5.98,5.98,0,0,1-1.7.464,2.946,2.946,0,0,0,1.3-1.62A5.924,5.924,0,0,1,16,7.922a2.942,2.942,0,0,0-5.023,2.668A8.4,8.4,0,0,1,4.9,7.533a2.914,2.914,0,0,0,.912,3.906,3,3,0,0,1-1.337-.365v.034a2.932,2.932,0,0,0,2.365,2.867,2.935,2.935,0,0,1-.775.1,3.135,3.135,0,0,1-.556-.054,2.955,2.955,0,0,0,2.754,2.031A5.959,5.959,0,0,1,4.6,17.309a5.842,5.842,0,0,1-.7-.042,8.429,8.429,0,0,0,4.522,1.312,8.3,8.3,0,0,0,8.392-8.319c0-.127,0-.253-.01-.377a5.8,5.8,0,0,0,1.472-1.514"
                  transform="translate(-3.893 -7)"
                  fill="#fff"
                />
              </svg>
            </div>
            <div class="square ms-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
              >
                <path
                  id="Union_8"
                  data-name="Union 8"
                  d="M4.308,16A4.313,4.313,0,0,1,0,11.692V4.308A4.313,4.313,0,0,1,4.308,0h7.384A4.313,4.313,0,0,1,16,4.308v7.384A4.313,4.313,0,0,1,11.692,16ZM1.231,4.308v7.384a3.081,3.081,0,0,0,3.077,3.077h7.384a3.081,3.081,0,0,0,3.077-3.077V4.308a3.081,3.081,0,0,0-3.077-3.077H4.308A3.08,3.08,0,0,0,1.231,4.308ZM3.692,8A4.308,4.308,0,1,1,8,12.308,4.313,4.313,0,0,1,3.692,8ZM4.923,8A3.077,3.077,0,1,0,8,4.923,3.08,3.08,0,0,0,4.923,8Zm6.769-4.615a.923.923,0,1,1,.923.923A.923.923,0,0,1,11.692,3.385Z"
                  fill="#fff"
                />
              </svg>
            </div>
            <div class="square ms-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
              >
                <g
                  id="icons8_facebook_logo_1"
                  transform="translate(-0.188 0.071)"
                >
                  <path
                    id="Subtraction_5"
                    data-name="Subtraction 5"
                    d="M6.966,14A7,7,0,0,1,2.05,2.05a7,7,0,0,1,9.91,9.889A6.965,6.965,0,0,1,7.187,14c.23-.008.479-.031.761-.069V8.855H9.759l.284-1.84h-2.1V6.009A2.064,2.064,0,0,1,8.162,5a.814.814,0,0,1,.751-.435h1.149V2.961h-.009a9.772,9.772,0,0,0-1.427-.086c-1.773,0-2.672.981-2.672,2.917V7.015H4.221v1.84H5.953v5.058A7.084,7.084,0,0,0,6.966,14Z"
                    transform="translate(0.188 -0.071)"
                    fill="#fff"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </ul>

    <label @click="Show()" id="icon">
      <i
        :class="[open ? 'fa-solid fa-xmark' : 'fa-solid fa-bars-staggered']"
      ></i>
    </label>
  </header>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Header",
  setup() {
    let open = ref(false);
    function Show() {
      open.value = !open.value;
    }
    return { open, Show };
  },
  data() {
    return {
      showicon: false,
      expanded: false,
      ContainerHeight: 0,

      Header: [
        {
          id: 1,
          title: "البلدية",
          iconMun: [
            {
              id: 1,
              name: "AlBaladiaIndex",
              title: "الرئيسية",
              icon: "/image/icons8_goal.svg",
            },
            {
              id: 2,
              name: "AlBaladia2",
              title: "الخلفية التاريخية",
              icon: "/image/icons8_time_machine_1.svg",
            },
            {
              id: 3,
              name: "AlBaladia3",
              title: "المجلس البلدي",
              icon: "/image/icons8_management.svg",
            },
            {
              id: 4,
              name: "AlBaladia4",
              title: "الخطة  الاستراتيجية",
              icon: "/image/icons8_strategy_1.svg",
            },
            {
              id: 5,
              name: "AlBaladia5",
              title: "الهيكلية الإدارية ",
              icon: "/image/icons8_networking_manager.svg",
            },
            {
              id: 6,
              name: "AlBaladia6",
              title: "الميزانية والموازنة",
              icon: "/image/icons8_transaction.svg",
            },
            {
              id: 7,
              name: "AlBaladia7",
              title: "مقار ومرافق البلدية",
              icon: "/image/icons8_building.svg",
            },
            {
              id: 8,
              name: "AlBaladia8",
              title: "المراكز",
              icon: "/image/svgexport-6(47).svg",
            },
          ],
        },
        {
          id: 2,
          title: "المدينة",
          iconMun: [
            {
              id: 1,
              name: "AlMadinaIndex",
              title: "الموقع والمناخ ",
              icon: "/image/icons8_marker.svg",
            },
            {
              id: 2,
              name: "AlMadina2",
              title: "تاريخ وحضارة",
              icon: "/image/icons8_sand_timer.svg",
            },
            {
              id: 3,
              name: "AlMadina3",
              title: "الأحياء",
              icon: "/image/icons8_layers_1.svg",
            },
            {
              id: 4,
              name: "AlMadina4",
              title: "الأحياء",
              icon: "/image/icons8_country.svg",
            },
            {
              id: 5,
              name: "AlMadina5",
              title: "الخريطة التفاعلية",
              icon: "/image/icons8_map.svg",
            },
            {
              id: 6,
              name: "AlMadina6",
              title: "المتحف الإلكتروني",
              icon: "/image/icons8_building.svg",
            },
          ],
        },
        {
          id: 3,
          title: "الخدمات",
          iconMun: [
            {
              id: 1,
              name: "AlKhadamat",
              title: " الخدمات العامة ",
              icon: "/image/icons8_service.svg",
            },
            {
              id: 2,
              name: "AlKhadamat2",
              title: " أنظمة وأدلة",
              icon: "/image/Union 33.svg",
            },
          ],
        },
        {
          id: 4,
          title: "المشاريع",
          icon: "",
          iconMun: [
            {
              id: 1,
              name: "AlMasharie",
              title: "المشاريع القائمة",
              icon: "/image/icons8_engineering.svg",
            },
            {
              id: 2,
              name: "AlMasharie2",
              title: " المشاريع التطويرية",
              icon: "/image/icons8_idea.svg",
            },
          ],
        },
        {
          id: 5,
          title: "المركز الإعلامي",

          iconMun: [
            {
              id: 1,
              name: "MediaCenter",
              title: "أخبار واعلانات ",
              icon: "/image/icons8_news.svg",
            },
            {
              id: 2,
              name: "MediaCenter2",
              title: "الألبومات",
              icon: "/image/icon8.svg",
            },
            {
              id: 3,
              name: "MediaCenter3",
              title: "تقارير وإصدارات",
              icon: "/image/icons8_pdf.svg",
            },
            {
              id: 4,
              name: "MediaCenter4",
              title: "أرقام وإحصائيات",
              icon: "/image/icons8_bar_chart.svg",
            },
          ],
        },
      ],
    };
  },
  async mounted() {
    var dropdown = document.getElementsByClassName("dropDown");
    var routerlinka = document.getElementsByClassName("routerlinka");
    var ul = document.getElementsByClassName("ul");
    // console.log(ul);
    var i;
    //let result = await axios.get("http://localhost:3000/SideBar");
    // console.log(result.data[0]);
    // this.Header = result.data[0];

    for (i = 0; i < dropdown.length; i++) {
      dropdown[i].addEventListener("click", function () {
        var dropdownContent = this.nextElementSibling;

        if (dropdownContent.style.display === "flex") {
          dropdownContent.style.display = "none";
        } else {
          dropdownContent.style.display = "flex";
        }
      });
    }
  },
};
</script>

<style scoped>
@media screen and (min-width: 992px) {
  header {
    left: 0;
    top: 0;
    align-items: center;
    transition: 0.5s;
    background-image: linear-gradient(
      to bottom,
      rgba(239, 239, 239, 1),
      rgba(239, 239, 239, 0)
    );
    padding: 21px 0px 0px;
    height: 90px;
    margin-bottom: 0px;
    position: relative;
    /* z-index: 2; */
  }
  header img {
    width: 80px;
  }
  header .divimg {
    position: absolute;
    /* left: 50%; */
    left: 48%;
    /* z-index: 1; */
    top: 0;
  }

  header a {
    color: #392c23;
    text-decoration: none;
  }
  header p {
    margin-bottom: 0;
  }
}
@media screen and (max-width: 767px) {
  header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 80px;
    background: #fafafa;
    padding: 0 40px;
  }

  header ul.ul li,
  header ul.ul li a {
    text-decoration: none;
    list-style: none;
  }

  label.logo {
    font-size: 35px;
    font-weight: bold;
    line-height: 80px;
  }

  header ul.ul a.dropDown {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  header ul.ul {
    z-index: 1;
    padding: 0 35px;
    position: fixed;
    width: 100%;
    float: right;
    margin-right: 40px;
    height: 100vh;
    background: #fafafa;
    top: 72px;
    left: 0px;
    text-align: center;
    transition: all 0.5s;
    margin-top: 0 !important;
  }

  .submenu1 {
    max-height: 0;
    overflow-y: hidden;
  }

  .submenu1.show2 {
    max-height: 200px;
  }

  header li {
    display: block;
    margin: 25px 0px;
    line-height: 30px;
  }

  header a {
    color: #392c23;
    font-size: 20px;
  }

  a.active,
  a:hover {
    color: #3ec4b5;
  }

  header #icon {
    font-size: 30px;
    line-height: 80px;
    float: left;
    /* margin-right: 40px; */
    cursor: pointer;
  }

  header label img {
    width: 60px;
  }

  header ul.ul li ul a span img {
    filter: invert(16%) sepia(14%) saturate(1055%) hue-rotate(341deg)
      brightness(62%) contrast(92%);
  }

  header .ul li ul a img:hover,
  header .ul li ul a.router-link-active.router-link-exact-active img {
    filter: invert(28%) sepia(42%) saturate(5614%) hue-rotate(335deg)
      brightness(84%) contrast(92%);
  }

  .expanded {
    transform: rotate(180deg);
  }
}

@media screen and (min-width: 768px) and (max-width: 991px) {
  header ul.ul li ul a span img {
    filter: invert(16%) sepia(14%) saturate(1055%) hue-rotate(341deg)
      brightness(62%) contrast(92%);
  }

  header .ul li ul a img:hover,
  header .ul li ul a.router-link-active.router-link-exact-active img {
    filter: invert(28%) sepia(42%) saturate(5614%) hue-rotate(335deg)
      brightness(84%) contrast(92%);
  }
  header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 80px;
    background: #fafafa;
    padding: 0 40px;
  }

  header ul.ul li,
  header ul.ul li a {
    text-decoration: none;
    list-style: none;
  }

  label.logo {
    font-size: 35px;
    font-weight: bold;
    /* padding: 0 100px; */
    line-height: 80px;
  }

  header ul.ul a.dropDown {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  header ul.ul {
    z-index: 1;
    padding: 0 35px;
    position: fixed;
    width: 100%;
    float: right;
    margin-right: 40px;
    height: 100vh;
    background: #fafafa;
    top: 72px;
    left: 0px;
    text-align: center;
    transition: all 0.5s;
    margin-top: 0 !important;
  }

  .submenu1 {
    max-height: 0;
    overflow-y: hidden;
  }

  .submenu1.show2 {
    max-height: 200px;
  }

  header li {
    display: block;
    margin: 25px 0px;
    line-height: 30px;
  }

  header a {
    color: #392c23;
    font-size: 20px;
  }

  a.active,
  a:hover {
    color: #3ec4b5;
  }

  header #icon {
    font-size: 30px;
    line-height: 80px;
    float: left;
    /* margin-right: 40px; */
    cursor: pointer;
  }

  header label img {
    width: 60px;
  }

  header .ul li ul a svg path {
    fill: #392c23;
  }

  header .ul li ul a svg path:hover,
  header .ul li ul a.active svg path {
    fill: #cf2a45;
  }

  .expanded {
    transform: rotate(180deg);
  }
}
</style>
