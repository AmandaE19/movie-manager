export const formatDateToInput = (date: Date): string => {
	return date.toISOString().split("T")[0];
}

export const formatStringToFloat = (value: string): number => {
	return parseFloat(value);
}

export const formatDate = (date: string): string => {
	if(!date) {
		return "";
	}
	const currentDate = date.split(" ")[0];
	const [year, month, day] = currentDate.split("-");
	return `${day}/${month}/${year}`;
};

export const formatMinutes = (totalMinutes: string): string => {
	if(!totalMinutes) {
		return "";
	}
	const minutesToNumber = Number(totalMinutes)
	const hours = Math.floor(minutesToNumber / 60);
	const minutes = minutesToNumber % 60;

	if (hours && minutes) return `${hours}h ${minutes}m`;
	if (hours) return `${hours}h`;
	return `${minutes}m`;
};

export const formatCurrencyShort = (value: string): string => {
	const valueToNumber = Number(value);
	if(valueToNumber >= 1_000_000_000_000) {
		return `${(valueToNumber / 1_000_000_000_000).toFixed(2).replace(/\.0$/, "")}T`;
	}
	if (valueToNumber >= 1_000_000_000) {
		return `${(valueToNumber / 1_000_000_000).toFixed(2).replace(/\.0$/, "")}B`;
	}
	if (valueToNumber >= 1_000_000) {
		return `${(valueToNumber / 1_000_000).toFixed(2).replace(/\.0$/, "")}M`;
	}
	if (valueToNumber >= 1_000) {
		return `${(valueToNumber / 1_000).toFixed(2).replace(/\.0$/, "")}K`;
	}
	return valueToNumber.toString();
};

export const handleStatus = (date: string): string => {
	if(!date) {
		return "";
	}
	const currentDate = new Date().getTime();
	const dateToConvert = new Date(date).getTime();
	if(currentDate >= dateToConvert) {
		return "Lançado";
	} else {
		return "Não lançado";
	}
}