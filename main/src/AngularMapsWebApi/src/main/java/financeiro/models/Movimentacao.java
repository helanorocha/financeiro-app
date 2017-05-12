package financeiro.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "movimentacao")
public class Movimentacao implements Comparable<Movimentacao> {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	private String descricao;
	private Double valor;
	private String data;
	private String tipo;
	private String categoria;
	private String formaMovimentacao;
	
	@OneToOne
	private Usuario usuario;
	
	public Usuario getUsuario() {
		return usuario;
	}
	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}
	public String getData() {
		return data;
	}
	public void setData(String data) {
		this.data = data;
	}
	public String getTipo() {
		return tipo;
	}
	public void setTipo(String tipo) {
		this.tipo = tipo;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getDescricao() {
		return descricao;
	}
	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}
	public Double getValor() {
		return valor;
	}
	public void setValor(Double valor) {
		this.valor = valor;
	}
	public String getCategoria() {
		return categoria;
	}
	public void setCategoria(String categoria) {
		this.categoria = categoria;
	}
	public String getFormaMovimentacao() {
		return formaMovimentacao;
	}
	public void setFormaMovimentacao(String formaMovimentacao) {
		this.formaMovimentacao = formaMovimentacao;
	}
	
	@Override
	public int compareTo(Movimentacao o) {
		String [] data1 = this.getData().substring(0, 10).split("[/-]");
		String [] data2 = o.getData().substring(0, 10).split("[/-]");
		Integer num1 = Integer.parseInt(data1[0].concat(data1[1]).concat(data1[2]));
		Integer num2 = Integer.parseInt(data2[0].concat(data2[1]).concat(data2[2]));
		if(this.getData().indexOf("/") > -1) {
			String [] temp = this.getData().split("/");
			num1 = Integer.parseInt(temp[2].concat(temp[1]).concat(temp[0]));
		}
		if(o.getData().indexOf("/") > -1) {
			String [] temp = o.getData().split("/");
			num2 = Integer.parseInt(temp[2].concat(temp[1]).concat(temp[0]));
		}
		
		if(this.getDescricao().toLowerCase().indexOf("receit") > -1) {
			System.out.println(this.getData());
		}
		if(o.getDescricao().toLowerCase().indexOf("receit") > -1) {
			System.out.println(o.getData());
		}
		if(num1 < num2) {
			return 1;
		} else if(num1 > num2) {
			return -1;
		}
		return 0;
	}
}