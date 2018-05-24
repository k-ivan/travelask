import Vue from 'vue';

new Vue({
  el: '#chat',
  data() {
    return {
      comments: [
        {
          image: 'http://i.pravatar.cc/50?img=27',
          msg: 'Где взять на прокат вечернее красивое платье? А еще лучше дизайнерское! Предстоит участие в мероприятии, где все гости будут наверняка одеты в наряды "от кутюр", а у меня со средствами туговато, да и жалко на один раз такие деньжищи отваливать. Мне бы салон найти, где на прокат можно такой наряд взять. Поделитесь, пожалуйста, советами.',
          date: 'вчера в 17.45',
          author: false
        },
        {
          image: 'http://i.pravatar.cc/50?img=28',
          msg: 'Поисковик вам в помощь! Но цена примерно в половину стоимости платья.',
          date: 'вчера в 18.45',
          author: true
        },
        {
          image: 'http://i.pravatar.cc/50?img=27',
          msg: 'Где взять на прокат вечернее красивое платье? А еще лучше дизайнерское! Предстоит участие в мероприятии, где все гости будут наверняка одеты в наряды "от кутюр", а у меня со средствами туговато',
          date: 'вчера в 19.45',
          author: false
        },
        {
          image: 'http://i.pravatar.cc/50?img=28',
          msg: 'Поисковик вам в помощь! Но цена примерно в половину стоимости платья.',
          date: 'сегодня в 17.45',
          author: true
        }
      ],
      message: ''
    }
  },
  mounted() {
    this.scrollBottom();
  },
  methods: {
    stretch() {
      let cs = getComputedStyle(this.$refs.textarea);
      let offset;

      this.$refs.textarea.style.height = 0;

      if(cs.boxSizing === 'border-box') {
        offset = parseFloat(cs.borderTopWidth) + parseFloat(cs.borderTopWidth);
      }
      else if(cs.boxSizing === 'content-box') {
        offset = parseFloat(cs.paddingTop) + parseFloat(cs.paddingBottom);
      }

      const height = `${this.$refs.textarea.scrollHeight + offset}px`;

      this.$refs.textarea.style.height = height;
    },
    scrollBottom() {
      setTimeout(() => {
        this.$refs.body.scrollTop = this.$refs.body.scrollHeight;

      }, 0);
    },
    submitHandler() {
      if (this.message === '') {
        this.$refs.textarea.focus();
        return;
      }

      const now = new Date();
      const h = (now.getHours() < 10) ? `0${now.getHours()}` : now.getHours();
      const m = (now.getMinutes() < 10) ? `0${now.getMinutes()}` : now.getMinutes();

      this.comments.push({
        image: 'http://i.pravatar.cc/50?img=28',
        msg: this.message,
        date: `Сегодня в ${h}:${m}`,
        author: true
      });
      this.message = '';
      this.scrollBottom();
    }
  }
});
