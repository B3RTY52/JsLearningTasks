const app = new Vue({
    el: '#app',
    data: {
        message: `			
        <header class="header">
        <nav class="nav">
            <li class="nav-item">
                <a href="#" class="nav-link">Для мужчин</a></li>
            <li class="nav-item">
                <a href="#" class="nav-link">Для женщин</a></li>
            <li class="nav-item">
                <a href="#" class="nav-link">Для детей</a></li>
        </nav>
        </header>`,
        anotherMessage: `
        <header class="header">
        <nav class="nav">
            <li class="nav-item">
                <a href="#" class="nav-link">Оплата</a></li>
            <li class="nav-item">
                <a href="#" class="nav-link">Доставка</a></li>
        </nav>
        </header>`,
        view: true,
        message1: '',
        checked: true,
        count: 0,
        url: "",
        cleanUrl: ""
    },
    methods: {
        countUp: function () {
            this.count += 1;
        },
        countDown: function () {
            this.count -= 1;
        },

        render: function () {
            if (!this.view) {
                this.view = true;
                document.querySelector('.render').textContent = `v-show ON`;
            } else {
                this.view = false;
                document.querySelector('.render').textContent = `v-show OFF`;
            }
        },

        cleanerUrl: function () {
            this.cleanUrl = this.url.replace(/^https?:\/\//, '')
                .replace(/\/$/, '');
        }
    }
});