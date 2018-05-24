import Vue from 'vue';

new Vue({
  el: '#chat',
  data() {
    return {
      comments: [
        {
          image: 'http://i.pravatar.cc/50?img=27',
          msg: 'Где взять на прокат вечернее красивое платье? А еще лучше дизайнерское! Предстоит участие в мероприятии, где все гости будут наверняка одеты в наряды "от кутюр", а у меня со средствами туговато, да и жалко на один раз такие деньжищи отваливать. Мне бы салон найти, где на прокат можно такой наряд взять. Поделитесь, пожалуйста, советами.'
        },
        {
          image: 'http://i.pravatar.cc/50?img=28',
          msg: 'Поисковик вам в помощь! Но цена примерно в половину стоимости платья.'
        },
        {
          image: 'http://i.pravatar.cc/50?img=27',
          msg: 'Где взять на прокат вечернее красивое платье? А еще лучше дизайнерское! Предстоит участие в мероприятии, где все гости будут наверняка одеты в наряды "от кутюр", а у меня со средствами туговато'
        },
        {
          image: 'http://i.pravatar.cc/50?img=28',
          msg: 'Поисковик вам в помощь! Но цена примерно в половину стоимости платья.'
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

      this.comments.push({
        image: 'http://i.pravatar.cc/50?img=28',
        msg: this.message
      });
      this.message = '';
      this.scrollBottom();
    }
  }
});
