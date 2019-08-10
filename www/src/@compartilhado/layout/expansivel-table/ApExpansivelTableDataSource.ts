import { BehaviorSubject } from 'rxjs';
import { MatTableDataSource } from '@angular/material';

export class ApExpansivelTableDataSource<T> extends MatTableDataSource<T>{

    connect(): BehaviorSubject<T[]> {
        const rows = [];
        this.data.forEach(element => rows.push(element, { detailRow: true, element }));
        super.connect().next(rows);
        return super.connect();
    }

}
