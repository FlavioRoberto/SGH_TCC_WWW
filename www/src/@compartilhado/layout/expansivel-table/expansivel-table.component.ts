import { Component, Input, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ApExpansivelTableDataSource } from './ApExpansivelTableDataSource';
import { MatSort } from '@angular/material';

@Component({
    selector: 'ap-expansivel-table',
    templateUrl: './expansivel-table.component.html',
    styleUrls: ['./expansivel-table.component.scss'],
    animations: [
        trigger('detailExpand', [
            state('collapsed', style({ height: '0px', minHeight: '0', visibility: 'hidden' })),
            state('expanded', style({ height: '*', visibility: 'visible' })),
            transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
        ]),
    ],
})
export class ExpansivelTableComponent implements OnInit {

    @Input() displayedColumns: ColumnDef[];
    @Input() columnDefExpansivel: ColumnDef[];
    expandedElement: any;
    @Input() acoesTabela: any[];
    @Input() dataSource: ApExpansivelTableDataSource<any>;
    @Input() desabilitarBotoes: boolean;
    @ViewChild(MatSort) sort: MatSort;
    
    isExpansionDetailRow = (i: number, row: Object) => row.hasOwnProperty('detailRow');
    defColumns: string[];

    ngOnInit(): void {
        this.defColumns = this.displayedColumns.map(i => i.def);
        if (this.acoesTabela.length > 0) {
            this.defColumns.push('acao');
        }
        this.dataSource.sort = this.sort;
    }

    onClick(event, element, acao, index): void {
        event.stopPropagation();
        event.preventDefault();
        const i = index / 2;
        acao.executar(element, i);
    }
}

export class ColumnDef {

    constructor(
        public titulo: string,
        public def: string,
        public value: string = '') {
    }
}
