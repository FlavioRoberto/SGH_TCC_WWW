import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable, of } from 'rxjs';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ICurriculoDisciplina } from 'app/main/gerenciamento/curriculo/model/curriculo-disciplina.model';
import { MatTableDataSource } from '@angular/material';
import { ApExpansivelTableDataSource } from './ApExpansivelTableDataSource';

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

    @Input() displayedColumns: IColumnDef[];
    @Input() columnDefExpansivel: IColumnDef[];
    expandedElement: any;
    @Input() acoesTabela: any[];
    @Input() dataSource: ApExpansivelTableDataSource<any>;
    @Input() desabilitarBotoes: boolean;

    isExpansionDetailRow = (i: number, row: Object) => row.hasOwnProperty('detailRow');
    defColumns: string[];

    ngOnInit(): void {
        this.defColumns = this.displayedColumns.map(i => i.def);
        if (this.acoesTabela.length > 0) {
            this.defColumns.push('acao');
        }
    }

    onClick(event, element, acao): void {
        event.stopPropagation();
        event.preventDefault();
        acao.executar(element);
    }
}

export interface IColumnDef {
    titulo: string;
    def: string
}
