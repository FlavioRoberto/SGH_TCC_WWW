import { BehaviorSubject } from 'rxjs';
import { MatTableDataSource } from '@angular/material';

export class ApExpansivelTableDataSource<T> extends MatTableDataSource<T>{

    add(item: T): void {
        this.data = [...this.data, item];
        this.connect();
    }


    connect(): BehaviorSubject<T[]> {
        const rows = [];
        this.data.forEach(element => rows.push(element, { detailRow: true, element }));
        super.connect().next(rows);
        return super.connect();
    }

}
