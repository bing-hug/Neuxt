<script setup lang="ts">

type refItem = Element | ComponentPublicInstance | null;

  const form = ref({
    name: '',
    phone: '',
    email: '',
    age: '',
    sex: '',
    password: '',
  });

  const refMap: Record<string, refItem> = {};

  const setRefMap = (el: Element, field: string) => {
    if (field && el) {
      refMap[field] = el;
    }
  };

  const formFocus = ref<Record<string,boolean>>({
    name: false,
    phone: false,
    email: false,
    age: false,
    sex: false,
    password: false,
  });

  const setLabelToBorder = function (field: string, value: boolean): void {
    formFocus.value[field] = value;
    console.log(formFocus)
  }

  const onFormInputFocus = (instance: string) => refMap[instance].focus();

</script>

<template>
  <div class="box mt-100px">
    <el-form :model="form" label-width="auto" style="max-width: 600px;">
      <el-form-item>
        <el-input
            v-model="form.name"
            :ref="(el: refItem) => setRefMap(el, 'name')"
            @focus="setLabelToBorder('name', true)"
            @blur="setLabelToBorder('name', false)"
        >
        </el-input>
        <div
            class="custom-form-label"
            :class="[formFocus.name ? 'float-label' : '', ]"
            @click="onFormInputFocus('name')"
        >
          这是测试的lebal
        </div>
      </el-form-item>
    </el-form>
  </div>

</template>

<style scoped>
  .custom-form-label{
    position: absolute;
    top: 50%;
    left: 15px;
    transform: translateY(-50%);
    z-index: 1;
    font-size: 16px;
    color: #717171;
    user-select: none;
    cursor: text;
  }
  .float-label {
    top: 8px;
    padding: 0 8px;
    font-size: 12px;
    transform: translateY(-100%);
    color: #ec0000;
    transition: transform 0.15s ease,
    opacity 0.15s ease;
    background-color: white;
  }
  .box {
    width: 100%;
    height: 100%;
    background: url("~/assets/image/bg_web.webp") no-repeat;
    background-size: 100% 100%;
  }
</style>