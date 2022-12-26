<template>
  <div class="col-md-12 col-lg-6 mtcol12">
    <div>
      <h3>مقترحات</h3>
      <p>
        .أهلا بك .. نحن على استعداد لخدمتك واستقبال كافة اقتراحاتك واستفساراتك
      </p>
    </div>
    <form>
      <div class="row justify-content-center mt-3">
        <div class="form-group col-sm-6 flex-column d-flex">
          <label for="preachingtype" class="form-label"> نوع المقترح </label>
          <select class="form-select" v-model="form.select" id="preachingtype">
            <i class="fa-solid fa-chevron-down"></i>
            <option disabled value="">اختر نوع المقترح</option>
            <option value="1">one</option>
            <option value="2">tow</option>
            <option value="3">tree</option>
          </select>
        </div>
        <div class="form-group col-sm-6 flex-column d-flex">
          <label class="form-label">الاسم كاملا</label>
          <input
            v-model="form.name"
            type="text"
            id="fname"
            class="form-control"
            placeholder="أدخل اسمك رباعيا"
          />
        </div>
      </div>
      <div class="row justify-content-center mt-3">
        <div class="form-group col-sm-6 flex-column d-flex">
          <label for="phone" class="form-label">رقم الجوال</label>
          <input
            v-model="form.mobail"
            type="tel"
            class="form-control"
            id="phone"
            placeholder="أدخل رقم جوالك "
          />
        </div>
        <div class="form-group col-sm-6 flex-column d-flex">
          <label for="email" class="form-label">البريد الالكتروني</label>

          <input
            v-model="form.email"
            type="email"
            class="form-control"
            id="email"
            placeholder="أدخل بريدك الالكتروني"
          />
        </div>
      </div>
      <div class="row justify-content-center mt-3">
        <div class="form-group col-sm-6 flex-column d-flex">
          <label for="address" class="form-label">عنوان السكن</label>
          <input
            v-model="form.address"
            type="text"
            class="form-control"
            id="address"
            placeholder="أدخل عنوان سكنك"
          />
        </div>
        <div class="form-group col-sm-6 flex-column d-flex">
          <label for="number" class="form-label"
            >رقم اشتراك البلدية <span>(اختياري)</span></label
          >
          <input
            v-model="form.number"
            type="text"
            class="form-control"
            id="number"
            placeholder="أدخل رقم اشتراك البلدية"
          />
        </div>
      </div>
      <div class="row justify-content-center mt-3">
        <div class="form-group dropZoneContainer flex-column d-flex">
          <label for="address" class="form-label">ارفاق ملف</label>
          <input
            type="file"
            id="drop_zone"
            class="FileUpload"
            accept=".jpg,.png,.gif"
            onchange="handleFileSelect(this) "
          />
          <div class="dropZoneOverlay">
            <p>
              <span>ارفاق ملف </span>أو السحب والإفلات هنا <br />يجب ألا يزيد
              حجم الملف عن 5 ميجا
            </p>
          </div>
        </div>
      </div>
      <div class="row justify-content-center mt-3">
        <div class="form-group flex-column d-flex">
          <label for="data" class="form-label">بيانات المقترح</label>
          <textarea
            v-model="form.message"
            placeholder="اكتب  نص مقترحك هنا ..."
            id="data"
            class="form-control"
          >
          </textarea>
        </div>
      </div>
      <div class="send">
        <input type="submit" class="form-control" value=" " />

        <i class="fa-solid fa-paper-plane"></i>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Section2",
  data() {
    return {
      form: {
        select: "",
        name: "",
        email: "",
        address: "",
        mobail: "",
        number: "",
        message: "",
      },
    };
  },
};
</script>

<style scoped>
@media screen and (min-width: 992px) {
  .dropZoneOverlay,
  .FileUpload {
    width: 97%;
    height: 105px;
  }
}
@media screen and (max-width: 767px) {
  .mtcol12 {
    margin-top: 70px;
  }
  .form-group {
    margin-top: 20px;
  }

  .dropZoneOverlay,
  .FileUpload {
    width: 94%;
    height: 105px;
  }
}

@media screen and (min-width: 768px) and (max-width: 991px) {
  .mtcol12 {
    margin-top: 70px;
  }
  .dropZoneOverlay,
  .FileUpload {
    width: 97%;
    height: 105px;
  }
}
.form-control {
  padding: 12px 15px;
  border-radius: 13px;
}

.form-select {
  padding: 12px 15px;
  border-radius: 13px;
  background-position: left 0.75rem center;
}

form label {
  font-size: 14px;
  font-family: "FFShamelFamily-SansOnebook";
  color: #392c23;
}

form label span {
  font-size: 14px;
  font-family: "FFShamelFamily-SansOnebook";
  color: #c8c8c8;
}

form {
  position: relative;
}

input::placeholder,
.form-select {
  font-size: 14px;
  font-family: "FFShamelFamily-SansOnebook";

  color: #c8c8c8 !important;
  background-color: white;
}

.dropZoneContainer {
  cursor: pointer;
  position: relative;
}

.dropZoneOverlay {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid 1px #e2e2e2;
  border-radius: 13px;
  font-family: "FFShamelFamily-SansOneBook";
  font-size: 14px;
  color: #c8c8c8;
  position: absolute;
  top: 25px;
  text-align: center;
  background-color: white;
}

.dropZoneOverlay p span {
  font-family: "FFShamelFamily-SansOneBold";
  color: #cf2a45;
  font-size: 14px;
}

.FileUpload {
  opacity: 0;
  position: relative;
  z-index: 1;
}

textarea.form-control {
  font-size: 14px;
  font-family: "FFShamelFamily-SansOneBook";
  color: #848484;
  min-height: 100px;
  height: 135px;
}

div .send {
  position: absolute;
  bottom: 0;
  display: inline-block;
  left: 0;
}

input[type="submit"] {
  width: 46px;
  background-color: #3ec4b5;
}

.fa-solid,
.fas {
  right: 17px;
  position: absolute;
  bottom: 15px;
  color: white;
}

.paddingy {
  padding: 113px 0 41px 0;
}
</style>
