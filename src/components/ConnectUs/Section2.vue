<template>
  <div class="col-md-12 col-lg-6">
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
          <select class="form-select" id="preachingtype">
            <i class="fa-solid fa-chevron-down"></i>
            <option hidden selected>اختر نوع المقترح</option>
            <option value="1">one</option>
            <option value="2">tow</option>
            <option value="3">tree</option>
          </select>
        </div>
        <div class="form-group col-sm-6 flex-column d-flex">
          <label class="form-label">الاسم كاملا</label>
          <input
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
            type="tel"
            class="form-control"
            id="phone"
            placeholder="أدخل رقم جوالك "
          />
        </div>
        <div class="form-group col-sm-6 flex-column d-flex">
          <label for="email" class="form-label">البريد الالكتروني</label>
          <input
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
          <!-- <input type="file" class="form-control" id="address" placeholder=""> -->
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
          <textarea id="data" class="form-control">
...اكتب نص مقترحك هنا</textarea
          >
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
};
</script>

<style></style>
