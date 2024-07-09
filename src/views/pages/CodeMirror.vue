<template>
  <button @click="getCode">获取代码内容</button>

  <div ref="editCodeRef" class="edit"></div>
</template>
<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from "vue";
import { EditorState } from "@codemirror/state";
import { EditorView, keymap } from "@codemirror/view";
import { indentWithTab } from "@codemirror/commands";
import { basicSetup } from "codemirror";
import {
  oneDarkTheme,
  oneDarkHighlightStyle,
} from "@codemirror/theme-one-dark";
import { syntaxHighlighting } from "@codemirror/language";
import { javascript } from "@codemirror/lang-javascript";

const editCodeRef = ref<HTMLElement | undefined>(undefined);

const view = ref<EditorView | undefined>(undefined);

// 初始化编辑器
const startState = EditorState.create({
  doc: "Hello World",
  extensions: [
    EditorView.theme({
      // ".cm-content": { background: "#000" },
      ".cm-scroller": { overflow: "auto", height: "300px" },
      "&.cm-focused": { outline: "none" },
      ".cm-gutter": { backgroundColor: "#fff" },
      ".cm-line::selection": { backgroundColor: "#fff !important" },
    }),
    basicSetup,
    keymap.of([indentWithTab]),
    // 语法高亮
    javascript(),
    // 代码高亮主题
    syntaxHighlighting(oneDarkHighlightStyle),
    oneDarkTheme,
    // 是否可编辑
    // EditorView.editable.of(false),
  ],
});

// 初始化编辑器
const init = () => {
  view.value = new EditorView({
    state: startState,
    parent: editCodeRef.value,
  });
};

// 获取代码内容
const getCode = () => {
  console.log(view.value?.state.doc.toString());
};

// 挂载
onMounted(init);
onUnmounted(() => {
  view.value?.destroy();
});
</script>
<style lang="less" scoped>
.edit {
  width: 800px;
  height: 300px;
}

button {
  margin-bottom: 20px;
}
</style>
