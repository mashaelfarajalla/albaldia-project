<template>
  <MainSection>
    <div class="bg section index container1 padding">
      <div class="container">
        <div class="row">
          <div
            class="tf-tree cs-tree d-flex justify-content-center"
            style="font-size: 28px"
          >
            <ul>
              <li class="">
                <span class="tf-nc top">رئاسة البلدية</span>
                <ul class="without-children">
                  <li style="margin-top: -5px">
                    <span class="tf-nc">وحدة المستشار القانوني</span>
                  </li>
                  <li class="without-childrenul" style="margin-top: 75px">
                    <span class="tf-nc mt5">دائرة خدمات الجمهور</span>
                    <ul>
                      <li>
                        <span class="tf-nc"
                          >الإدارة العامة للشؤون الإدارية</span
                        >
                        <ul>
                          <li>
                            <span class="tf-nc"
                              >الإدارة العامة للصحة والبيئة</span
                            >
                          </li>
                          <li>
                            <span class="tf-nc"
                              >الإدارة العامة للمراكز الثقافية
                            </span>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <span class="tf-nc">الإدارة العامة للشؤون المالية</span>
                        <ul>
                          <li>
                            <span class="tf-nc"
                              >الإدارة العامة للهندسة والتخطيط</span
                            >
                          </li>
                          <li>
                            <span class="tf-nc">الإدارة العامة للتنظيم</span>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <span class="tf-nc">الإدارة العامة للخدمات</span>
                        <ul>
                          <li>
                            <span class="tf-nc"
                              >الإدارة العامة للمياه والصرف الصحي</span
                            >
                          </li>
                          <li>
                            <span class="tf-nc"
                              >دائرة العلاقات العامة والإعلام</span
                            >
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li style="margin-top: -5px">
                    <span class="tf-nc">دائرة الرقابة العامة</span>
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
export default {
  components: { MainSection },
};
</script>

<style>
.cs-tree .without-children {
  position: relative;
}
.cs-tree .without-children::after {
  content: "";
  top: -56px;
  position: absolute;
  left: calc(50% - 0.03125em);
  width: 1px;
  height: 133px;
  background-color: #d6d6d6;
}

/* .tf-tree .without-childrenul li:before {
  top: -90% !important;
} */

/* .cs-tree .without-childrenul li:before {
  top: -90% !important;
  content: "";
  position: absolute;
 
  width: 100%;
  height: 1px;
  background-color: #d6d6d6;
} */
.top {
  background: #cf2a45 !important;
  color: white !important;
  font-size: 24px !important;
}
.tf-tree li li:first-child:before {
  right: calc(50% - 0.03125em);
}
.tf-tree li li:last-child:before {
  right: auto;
  left: calc(50% - 0.03125em) !important;
}

.tf-tree li li:before {
  top: 0.96875em;
  border-top: 1px solid #d6d6d6 !important;
}
.tf-tree .tf-nc:after,
.tf-tree .tf-nc:before {
  border-left: 1px solid #d6d6d6 !important;
  height: 0;
}
.tf-tree .tf-nc,
.tf-tree .tf-node-content {
  width: 300px;
  text-align: center;
  background: white;
  border: 1px solid #d6d6d6 !important;
  font-family: "FFShamelFamily-SansOneBold";
  font-size: 16px;
  color: #392c23;
  height: 56px;
}
</style>
