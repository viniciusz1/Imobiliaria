import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'imobFilter'
})
export class ImobFilterPipe implements PipeTransform {

    transform(items: any[], filters: any): any {
        if (!items || !filters) {
            return items;
        }

        return items.filter(item => this.applyFilter(item, filters));
    }
    applyFilter(item: any, filters: any): boolean {
        for (const filterField in filters) {
            if (filters.hasOwnProperty(filterField)) {
                const filterValue = filters[filterField];
                if (filterValue && item[filterField].toLowerCase().indexOf(filterValue.toLowerCase()) === -1) {
                    return false;
                }
            }
        }
        return true;
    }
}
