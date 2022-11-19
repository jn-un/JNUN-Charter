<template>
  <div class="md-body">
    <cover class="index-cover" style="">
      <img
        src="https://raw.githubusercontent.com/rhyme-qing/picture-bed/main/outher/202211160214555.svg"
        width="322.79"
      />
    </cover>

    <div class="page-cover">
      <h1>序言</h1>
      <h2>玆以联合之今日决心</h2>
      <p>限制其资本在互联网中的发展和其规模，</p>
      <p>以此形成两者之间的平衡以促进文化和科学技术的发展及进步，</p>

      保障人性的从良发展，捍卫正义和公平、开放。

      <h2>为达此目的</h2>
      以无国界的非营利性质去中心化社区自治组织作为主体，<br />

      以互联网开放性理论作为实践，<br />

      理想主义和黑客文化的传递。<br />

      <h2>联合非营利网络</h2>
      经去中心化流，集各组织提案区块，以不可更改和分布网络的原则，议定设立去中心化组织，定名联合现在。
    </div>
  </div>
</template>

<script>
  export default {
    name: 'index'
  }
</script>

<style scoped>
  .md-body {
    column-rule-style: groove;
    columns: 2;
    column-rule-color: rgb(14 0 0 / 8%);
    height: 100%;
    column-rule-width: 1px;
    column-gap: 3%;
    padding-bottom: 0 !important;
    text-align: justify;
  }
  @media (max-width: 1250px) {
    img {
      display: none;
    }
    body {
      overflow: auto;
    }
    cover {
      height: 0;
    }
  }
  cover {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  img {
    height: 100%;
  }
  .page-cover {
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: 100vh;
    align-content: center;
  }
</style>
