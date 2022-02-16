import { 
  Filters, Horizontal, FilterForm,
  Title, Wrap, Input,
  Select, Label, SubmitButton } from './style';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';

export default function FilterBar() {
  const { register, handleSubmit } = useForm();
  const { setFilters } = useAuth();

  function handleFilters(data) {
    setFilters(data);
  }

  return (
    <Filters>
      <h2>FILTROS</h2>

      <Horizontal />

      <FilterForm onSubmit={handleSubmit((data)=>handleFilters(data))}>
        <Title>Modelo</Title>
        <Wrap>
          <Input  type="checkbox" {...register('canoalto')} />
          <Label htmlFor='canoalto'>Cano Alto</Label>
        </Wrap>
        <Wrap>
          <Input  type="checkbox" {...register('canobaixo')} />
          <Label htmlFor='canobaixo'>Cano Baixo</Label>
        </Wrap>
        <Wrap>
          <Input  type="checkbox" {...register('esportivo')} />
          <Label htmlFor='esportivo'>Esportivo</Label>
        </Wrap>

        <Horizontal />

        <Title>Marca</Title>
        <Wrap>
          <Input  type="checkbox" {...register('adidas')} />
          <Label htmlFor='adidas'>Adidas</Label>
        </Wrap>
        <Wrap>
          <Input  type="checkbox" {...register('allstar')} />
          <Label htmlFor='allstar'>All Star</Label>
        </Wrap>
        <Wrap>
          <Input  type="checkbox" {...register('adidas')} />
          <Label htmlFor='adidas'>New Balance</Label>
        </Wrap>
        <Wrap>
          <Input  type="checkbox" {...register('adidas')} />
          <Label htmlFor='adidas'>Nike</Label>
        </Wrap>
        <Wrap>
          <Input  type="checkbox" {...register('adidas')} />
          <Label htmlFor='adidas'>Vans</Label>
        </Wrap>
        
        <Horizontal />

        <Title>Tamanho</Title>
        <Wrap>
          <Input  type="checkbox" {...register('n35')} />
          <Label htmlFor='n35'>35</Label>
        </Wrap>
        <Wrap>
          <Input  type="checkbox" {...register('n36')} />
          <Label htmlFor='n36'>36</Label>
        </Wrap>
        <Wrap>
          <Input  type="checkbox" {...register('n37')} />
          <Label htmlFor='n37'>37</Label>
        </Wrap>
        <Wrap>
          <Input  type="checkbox" {...register('n38')} />
          <Label htmlFor='n38'>38</Label>
        </Wrap>
        <Wrap>
          <Input  type="checkbox" {...register('n39')} />
          <Label htmlFor='n39'>39</Label>
        </Wrap>
        <Wrap>
          <Input  type="checkbox" {...register('n40')} />
          <Label htmlFor='n40'>40</Label>
        </Wrap>
        <Wrap>
          <Input  type="checkbox" {...register('n41')} />
          <Label htmlFor='n41'>41</Label>
        </Wrap>
        <Wrap>
          <Input  type="checkbox" {...register('n42')} />
          <Label htmlFor='n42'>42</Label>
        </Wrap>

        <Horizontal />

        <Title>Valor</Title>
        <Select {...register('valor')}>
          <option value="0">R$ (0-100)</option>
          <option value="1">R$ (100-200)</option>
          <option value="2">R$ (200-300)</option>
          <option value="3">R$ (300-400)</option>
          <option value="4">R$ (400-500)</option>
          <option value="5">R$ (500+)</option>
        </Select>
        
        <SubmitButton type="submit">FILTRAR</SubmitButton>
      </FilterForm>
    </Filters>
  )
}