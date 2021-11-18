<template>
    <div class="category__box">
        <div class="container mx-auto px-12">
            <div class="grid grid-cols-8 gap-4">
                <div class="col-span-2">
                    <div class="category__left">
                        <ul>
                            <li>
                                <a href="#">
                                    <i class="fas fa-tshirt"></i>
                                    <span>Одежда и обувь</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i class="fas fa-tshirt"></i>
                                    <span>Одежда и обувь</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i class="fas fa-tshirt"></i>
                                    <span>Одежда и обувь</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i class="fas fa-tshirt"></i>
                                    <span>Одежда и обувь</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i class="fas fa-tshirt"></i>
                                    <span>Одежда и обувь</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i class="fas fa-tshirt"></i>
                                    <span>Одежда и обувь</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-span-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam eius ratione quisquam numquam fugit et perspiciatis neque aut sequi molestiae non, possimus consequatur atque nobis eveniet dolorum id necessitatibus? Soluta!
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .category__box {
        position: absolute;
        z-index: 101;
        min-width: 1000px;
        width: 100%;
        background: #f4f4f4;
        min-height: 700px;
    }
    .category__left {
        height: 100%;
        border-right: 1px solid rgba(0,0,0,.09);
    }
</style>
