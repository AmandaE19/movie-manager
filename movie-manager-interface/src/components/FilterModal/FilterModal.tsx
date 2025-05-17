import type { FilterProps } from "../../types/global";
import Button from "../Button/Button";
import Input from "../Input/Input";
import * as S from "./FilterModal.styled";

const FilterModal: React.FC<FilterProps> = ({
    onClose,
    initialDate,
    setInitialDate,
    finalDate,
    setFinalDate,
    filterValueDurantion,
    setFilterValueDurantion,
    filterValueRating,
    setFilterValueRating,
    handleFilter,
}) => {
    return (
        <S.Container>
            <S.Content>
                <S.Header>
                    <span>Filtros</span>
                    <span onClick={onClose}>x</span>
                </S.Header>
                <S.FilterOptions>
                    <Input
                        type="date"
                        label="Data de lançamento mínima"
                        placeholder="Escolher data"
                        value={initialDate}
                        onChange={e => setInitialDate(e.target.value)}
                    />
                    <Input
                        type="date"
                        label="Data de lançamento máxima"
                        placeholder="Escolher data"
                        value={finalDate}
                        onChange={e => setFinalDate(e.target.value)}
                    />
                    <Input
                        type="number"
                        label="Duração Mínima"
                        placeholder="Insira o tempo mínimo de duração em horas"
                        value={filterValueDurantion}
                        onChange={e => setFilterValueDurantion(parseFloat(e.target.value))}
                    />
                    <Input
                        type="number"
                        label="Menor Avaliação"
                        placeholder="Insira o menor valor de avaliação 0-10"
                        value={filterValueRating}
                        onChange={e => setFilterValueRating(Number(e.target.value))}
                    />
                </S.FilterOptions>
                <S.Buttons>
                    <Button variant="secondary" onClick={onClose} >Cancelar</Button>
                    <Button variant="primary" type="button" onClick={handleFilter}>Aplicar Filtros</Button>
                </S.Buttons>
            </S.Content>
        </S.Container>
    )
}

export default FilterModal
