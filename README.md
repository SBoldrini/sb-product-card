# SB-PRODUCT-CARD

Es un paquete de pruebas de despliegue en NPM

### Sebastián Boldrini

## Ejemplo
```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'sb-product-card';
```

```
<ProductCard
  product={product}
  initialValues={{
    count: 4,
    maxCount: 10
  }}
>
  {
    ({reset, count, increaseBy, isMaxCountReached}) => ( 
      <>
        <ProductImage />
        <ProductTitle />
        <ProductButtons />
      </>
    )
  }
</ProductCard>  
```