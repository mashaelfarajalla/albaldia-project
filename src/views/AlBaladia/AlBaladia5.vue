<template>
  <MainSection>
    <div class="bg section index container1 padding">
      <div class="container">
        <div class="row">
          <h3 class="text-center">الهيكلية الإدارية لبلدية غزة</h3>
          <div class="tf-tree cs-tree">
            <ul>
              <li class="">
                <span class="tf-nc topchild">رئاسة البلدية</span>
                <ul class="without-children">
                  <li>
                    <span class="tf-nc">وحدة المستشار القانوني</span>
                  </li>
                  <li>
                    <span class="tf-nc">دائرة الرقابة العامة</span>
                  </li>
                </ul>
                <ul class="without-children2">
                  <li class="tfnc1">
                    <span class="tf-nc span">دائرة خدمات الجمهور</span>
                    <ul>
                      <li>
                        <span class="tf-nc"
                          >الإدارة العامة للشؤون الإدارية</span
                        >
                        <ul class="ulchild">
                          <li>
                            <span class="tf-nc"
                              >الإدارة العامة للصحة والبيئة</span
                            >
                            <a class="iconadd">
                              <i class="fa-solid fa-plus"></i>
                            </a>
                            <ul class="none">
                              <li>
                                <span class="tf-nc">2</span>
                                <a
                                  class="iconadd2"
                                  data-bs-toggle="modal"
                                  data-bs-target="#staticBackdrop"
                                >
                                  <i class="fa-solid fa-plus"></i>
                                </a>
                                <modaldetails />
                              </li>
                              <li>
                                <span class="tf-nc">3</span>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <span class="tf-nc"
                              >الإدارة العامة للمراكز الثقافية
                            </span>
                            <a class="iconadd">
                              <i class="fa-solid fa-plus"></i>
                            </a>
                            <ul class="none">
                              <li>
                                <span class="tf-nc">2</span>
                              </li>
                              <li>
                                <span class="tf-nc">3</span>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <span class="tf-nc">الإدارة العامة للشؤون المالية</span>
                        <ul class="ulchild">
                          <li>
                            <span class="tf-nc"
                              >الإدارة العامة للهندسة والتخطيط</span
                            >
                            <a class="iconadd">
                              <i class="fa-solid fa-plus"></i>
                            </a>
                            <ul class="none">
                              <li><span class="tf-nc">2</span></li>
                              <li><span class="tf-nc">3</span></li>
                            </ul>
                          </li>
                          <li>
                            <span class="tf-nc">الإدارة العامة للتنظيم </span>
                            <a class="iconadd">
                              <i class="fa-solid fa-plus"></i>
                            </a>
                            <ul class="none">
                              <li><span class="tf-nc">2</span></li>
                              <li><span class="tf-nc">3</span></li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <span class="tf-nc">الإدارة العامة للخدمات</span>
                        <ul class="ulchild">
                          <li>
                            <span class="tf-nc"
                              >الإدارة العامة للمياه والصرف الصحي</span
                            >
                            <a class="iconadd">
                              <i class="fa-solid fa-plus"></i>
                            </a>
                            <ul class="none">
                              <li><span class="tf-nc">2</span></li>
                              <li><span class="tf-nc">3</span></li>
                            </ul>
                          </li>
                          <li>
                            <span class="tf-nc"
                              >دائرة العلاقات العامة والإعلام</span
                            >
                            <a class="iconadd">
                              <i class="fa-solid fa-plus"></i>
                            </a>
                            <ul class="none">
                              <li><span class="tf-nc">2</span></li>
                              <li><span class="tf-nc">3</span></li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </MainSection>
</template>

<script>
import MainSection from "@/components/MainSection.vue";
import modaldetails from "./modaldetails.vue";
export default {
  components: { MainSection, modaldetails },

  mounted() {
    var icon = document.getElementsByClassName("iconadd");
    console.log(icon);
    var i;
    for (i = 0; i < icon.length; i++) {
      icon[i].addEventListener("click", function () {
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "inline-flex") {
          dropdownContent.style.display = "none";
        } else {
          dropdownContent.style.display = "inline-flex";
        }
      });
    }
  },
};
</script>

<style scoped>
.none {
  display: none;
  margin-top: 0;
}
ul.none::before {
  content: "";
  /* top: 0px; */
  position: absolute;
  left: calc(50% - 0.03125em);
  width: 1px;
  height: 1em;
  background-color: #d6d6d6;
}
.cs-tree .without-children::after {
  content: "";
  top: 0px;
  position: absolute;
  left: calc(50% - 0.03125em);
  width: 1px;
  height: 75px;
  background-color: #d6d6d6;
}

.topchild {
  background: #cf2a45 !important;
  color: white !important;
  font-size: 24px !important;
}
.tf-tree li li:first-child:before {
  left: 0;
}
.tf-tree li li:last-child:before {
  right: 0;
}
.cs-tree,
.cs-tree li,
.cs-tree ul {
  width: 100%;
}
.tf-tree .without-children .tf-nc:before {
  height: 0;
}
.tf-tree li .without-children li:before {
  top: 50%;
}
ul.without-children {
  position: relative;
  margin-bottom: 0;
}

.tf-tree li li:before {
  border-top: 1px solid #d6d6d6 !important;
}
.tf-tree .tf-nc:after,
.tf-tree .tf-nc:before {
  border-left: 1px solid #d6d6d6 !important;
}
.tf-tree .tf-nc,
.tf-tree .tf-node-content {
  border-radius: 7px;
  width: 260px;
  text-align: center;
  background: white;
  border: 1px solid #d6d6d6 !important;
  font-family: "FFShamelFamily-SansOneBold";
  font-size: 16px;
  color: #392c23;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.ulchild .tf-nc {
  width: 200px;
  height: 80px;
}
.tf-tree .tf-nc:after {
  height: 3em;
}
.tf-tree li .without-children2 {
  margin-top: 0;
}
.tf-tree li .without-children2 .tfnc1:before {
  width: 0;
}
.cs-tree .tf-nc,
.tf-tree li {
  margin-top: 32px;
}
.cs-tree li.tfnc1,
.cs-tree li.tfnc1 .span {
  margin-top: 0;
}
ul.without-children li {
  margin-top: 0px;
}
.cs-tree .without-children li .tf-nc {
  margin-top: 0;
}
.tf-tree .tf-nc:before {
  height: 3em;
  top: -50px;
}
.iconadd,
.iconadd2 {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #3ec4b5;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  z-index: 1;
  margin-top: 20px;
  text-decoration: none;
  cursor: pointer;
}
</style>
