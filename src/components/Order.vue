<template>
    <tr>
        <td>№ {{ order.id }}</td>
        <td>{{ order.date }}</td>
        <td>{{ order.price }} ₽</td>
        <td><a href="#"><img src="../assets/image/visa-card-png-4 1.png" alt="not found"></a></td>
        <td>{{ order.price }}</td>
    </tr>
</template>

<script>
export default {
  props: ['order'],
  data: () => ({

  })
}
</script>

<style scoped>
    table tr td{
        text-align: center;
        color: #131E3D;
        font-size: 19px;
        font-weight: normal;
        border-bottom: 1px solid #D9D9D9;
        background: #F8F8FA;
        padding: 1.5rem 0;
    }
    table tr:last-child td:first-child{
        border-radius: 0 0 0 8px;
    }
    table tr:last-child td:last-child{
        border-radius: 0 0 8px 0;
    }
    table tr:last-child td{
        border-bottom: none;
    }
    table tr td img{
        text-align: center;
        margin: 0 auto;
    }

    @media (min-width: 769px) and (max-width: 1025px){
        table tr td img{
            width: 90px;
        }
    }

    @media (min-width: 600px) and (max-width: 769px){
        table tr td img{
            width: 80px;
        }
    }

    @media (min-width: 415px) and (max-width: 600px){
        table tr td{
            font-size: 16px !important;
        }
        table tr td img{
            width: 70px;
        }
    }

    @media (max-width: 415px){
        table tr td{
            font-size: 12px !important;
            padding: 1rem 0;
        }
        table tr td img{
            width: 50px;
        }
    }

    @media (max-width: 300px){
        table tr td img{
            width: 35px;
        }
    }

</style>
